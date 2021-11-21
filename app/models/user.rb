# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true
  validates :username, presence: {message: "Please enter a username"}
  validates :password_digest, :session_token, presence: true 
  validates :password, length: { minimum: 6, allow_nil: true} 

  attr_reader :password 

  after_initialize :ensure_session_token 

  has_many :products,
    primary_key: :id,
    foreign_key: :seller_id,
    class_name: :Product
  
  has_many :cartitems
    
  has_many :reviews,
    primary_key: :id,
    foreign_key: :reviewer_id,
    class_name: :Review

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user.nil?
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password 
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end
  
  private

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end

end

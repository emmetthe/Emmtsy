# == Schema Information
#
# Table name: products
#
#  id           :bigint           not null, primary key
#  description  :text             not null
#  seller_id    :integer          not null
#  category_id  :string           not null
#  product_name :string           not null
#  price        :decimal(10, 2)   not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Product < ApplicationRecord
  validates :description, presence: true
  validates :seller_id, presence: true 
  validates :category_id, presence: true 
  validates :product_name, presence: true 
  validates :price, presence: true

  has_one_attached :photo

  belongs_to :seller,
    primary_key: :id,
    foreign_key: :seller_id,
    class_name: :User

  has_many :cartitems,
    primary_key: :id,
    foreign_key: :product_id,
    class_name: :CartItem
  
  has_many :buyers,
    through: :cartitems,
    source: :user
  
  has_many :reviews

  belongs_to :category
end

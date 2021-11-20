# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  reviewer_id :integer          not null
#  description :text             not null
#  product_id  :integer          not null
#  rating      :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Review < ApplicationRecord
  validates :reviewer_id, presence: true 
  validates :description, presence: true
  validates :product_id, presence: true 
  validates :rating, presence: true 

  belongs_to :reviewer,
    primary_key: :id,
    foreign_key: :reviewer_id,
    class_name: :User

  belongs_to :product
end

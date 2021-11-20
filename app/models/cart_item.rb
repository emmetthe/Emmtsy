# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  quantity   :integer          not null
#  product_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CartItem < ApplicationRecord
  validates :user_id, presence: true 
  validates :quantity, presence: true
  validates :product_id, presence: true

  belongs_to :user

  belongs_to :product
end

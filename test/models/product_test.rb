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
require 'test_helper'

class ProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

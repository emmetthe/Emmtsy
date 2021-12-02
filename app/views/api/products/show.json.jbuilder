json.partial! 'api/products/product', product: @product
json.reviews @product.reviews, :product_id, :reviewer_id, :description, :rating
json.photoUrl url_for(@product.photo) if @product.photo.attached?
json.seller do 
  json.partial! "api/users/user", user: @product.seller
end
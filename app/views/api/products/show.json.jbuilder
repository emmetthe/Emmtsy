json.partial! 'api/products/product', product: @product
json.photoUrl url_for(@product.photo) if @product.photo.attached?
json.seller do 
  json.partial! "api/users/user", user: @product.seller
end
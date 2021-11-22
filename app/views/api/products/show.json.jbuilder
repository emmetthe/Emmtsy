json.partial! 'api/products/product', product: @product
json.seller do 
  json.partial! "api/users/user", user: @product.seller
end
json.products do 
  json.set! @product.id do 
    json.partial! 'api/products/product', product: @product
  end
end

json.seller do 
  json.partial! "api/users/user", user: @product.seller
end
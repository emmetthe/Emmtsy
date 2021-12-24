@products.each do |product|
  json.set! product.id do 
    json.extract! @category, :category_name
    json.extract! product, :id, :product_name, :price
    json.extract! product.seller
    json.photoUrl url_for(product.photo) if product.photo.attached?
    json.seller do 
      json.partial! "api/users/user", user: product.seller
    end
  end
end
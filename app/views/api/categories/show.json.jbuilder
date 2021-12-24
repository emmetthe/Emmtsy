@products.each do |product|
  json.set! product.id do 
    json.extract! @category, :category_name
    json.extract! product, :id, :product_name, :price
    json.extract! product.seller, :username
    json.photoUrl url_for(product.photo) if product.photo.attached?
  end
end
@products.each do |product|
  json.set! product.id do 
    json.partial! 'api/products/product', product: product
    json.photoUrl url_for(product.photo) if product.photo.attached?
  end
end
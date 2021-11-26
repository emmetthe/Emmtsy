@cart_items.each do |cart_item| 
  json.set! cart_item.product.id do  
    json.partial! '/api/cart_items/cart_item', cart_item: cart_item 
    json.extract! cart_item.product, :product_name, :price
    json.photoUrl url_for(cart_item.product.photo) if cart_item.product.photo.attached?
  end
end
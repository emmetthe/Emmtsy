@cart_items.each do |cart_item| 
  json.set! cart_item.id do  
    json.partial! '/api/cart_items/cart_item', cart_item: cart_item 
    json.extract! cart_item.product, :product_name, :price, :seller_id
    json.photoUrl url_for(cart_item.product.photo)
    json.extract! cart_item.product.seller, :username
  end
end
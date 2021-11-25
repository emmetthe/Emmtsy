json.partial! 'api/cart_items/cart_item', cart_item: @cart_item
json.photoUrl url_for(@cart_item.product.photo) if @cart_item.product.photo.attached?
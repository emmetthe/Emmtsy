json.set! product.id do 
    json.extract! @category, :category_name
    json.extract! product, :id, :product_name, :price
    json.extract! product.seller, :name
  end
end
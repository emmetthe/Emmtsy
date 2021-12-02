@reviews.each do |review|
  json.set! review.id do 
    json.extract! review, :id, :description, :rating, :product_id, :reviewer_id
    json.extract! review.reviewer, :username
    json.date review.created_at.strftime('%m-%d-%Y')
  end
end
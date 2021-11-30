json.extract! @review, :id, :description, :rating, :product_id, :reviewer_id
json.extract! @review.reviewer, :username
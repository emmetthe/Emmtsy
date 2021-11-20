class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.all
  end

  def show
    @review = Review.find(params[:id])
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 401
    end
  end

  def update
    @review = Review.find_by(id: params[:id])

    if @review && @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 401
    end
  end


  def destroy
    @review = Review.find_by(id: params[:id])
    if @review
      @review.destroy
      render :show
    else
      render ['Review does not exist']
    end
  end

  private
  def review_params
    params.require(:review).permit(:description, :reviewer_id, :product_id, :rating)
  end
end

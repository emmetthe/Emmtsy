class Api::CategoriesController < ApplicationController

  def index 
    @categories = Category.all 
    render '/api/category/index'
  end

  def show 
    @category = Category.find_by(id: params[:id])
    render :show
  end

  def create 
    @category = Category.create!(category_params)
    if @category.save!
    else 
      render json: @category.errors.full_messages, status: 401
    end 
  end

  private
  def category_params 
    params.require(:category).permit(:category_name)
  end
end

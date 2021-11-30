class Api::ProductsController < ApplicationController

  def index
    if params[:search]
      @products = Product.all.select {|product| product.product_name.downcase.include?(params[:search].downcase)}
    else 
      @products = Product.all 
      render :index
    end
  end

  def show 
    @product = Product.find_by(id: params[:id])
    render :show
  end

  def create 
    @product = Product.create!(product_params)
    if @product.save 
      render :index
    else 
      render json: @product.errors.full_messages, status: 422
    end 
  end

  private 
  def product_params 
    params.require(:product).permit(:description, :product_name, :seller_id, :category_id, :price)
  end

end

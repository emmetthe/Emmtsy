class Api::CartItemsController < ApplicationController
  before_action :require_logged_in, only: [:index, :show, :create, :update, :destroy]

  def index
    @cart_items = current_user.cartitems        
    render :index
  end

  def show
    @cart_item = CartItem.find(params[:id])
    render :show
  end

  def update 
    @cart_item = CartItem.find(params[:id])
    if @cart_item.update(cart_item_params)
      render :show
    else
      render json: @cart_item.errors.full_messages, status: 404 
    end
  end 

  def create
    @cart_item = CartItem.create!(cart_item_params)
    if @cart_item.save!
      render :show
    else
      render json: @cart_item.errors.full_messages, status: 422
    end
  end

  def destroy 
    @cart_item = CartItem.find(params[:id])
    if @cart_item && @cart_item.destroy 
      render :show
    else
      render json: @cart_item.errors.full_messages, status: 404 
    end
  end

  private 
  def cart_item_params 
    params.require(:cartItem).permit(:user_id, :product_id, :quantity)
  end
  
end

class Api::CartItemsController < ApplicationController

  def index
    return nil if !current_user
    @cart_items = CartItem.all.select {|item| item.user_id == current_user.id}        
    render 'api/cart_items/index'
  end

  def show
    @cart_item = CartItem.find_by(id: params[:id])
    render :show
  end

  def update 
    if logged_in?
      @cart_item = CartItem.find_by(id: params[:id])
        if @cart_item.update(cart_item_params)
          @cart_items = CartItem.all.select{ |item| item.user_id == current_user.id }
          render :index
        end
    else
      render json: @cart_item.errors.full_messages, status: 404 
    end
  end 

  def create
    @cart_item = CartItem.new(cart_item_params)
    if @cart_item.save
      render :index
    else
      render json: @cart_item.errors.full_messages, status: 422
    end
  end

  def destroy 
    if logged_in? 
      @cart_item = CartItem.find_by(id: params[:id])
      if @cart_item.destroy 
        @cart_items = CartItem.all.select{ |item| item.user_id == current_user.id }
        render :index
      end 
    else
      render json: @cart_item.errors.full_messages, status: 404 
    end
end

  private 
  def cart_item_params 
    params.require(:cart_item).permit(:user_id, :product_id, :quantity)
  end
  
end

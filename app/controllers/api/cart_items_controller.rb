class Api::CartItemsController < ApplicationController
  before_action :require_logged_in, only: [:index, :show, :create, :update, :destroy]

  def index
    @cart_items = CartItem.all.select{|item| item.user_id == current_user.id }     
    render :index
  end

  def show
    @cart_item = CartItem.find(params[:id])
    render :show
  end

  def update 
    @cart_item = CartItem.find_by(id: params[:id])
    # p params
    if @cart_item.update!(cart_item_params)
      @cart_items = CartItem.all.select{ |item| item.user_id == current_user.id }
      render :index
    else
      render json: @cartitem.errors.full_messages, status: 404 
    end
  end 

  def create
    # @cart_item = CartItem.create!(cart_item_params)
    # if @cart_item.save!
    #   @cart_items = CartItem.all.select{ |item| item.user_id == current_user.id }
    #   render :show
    # else
    #   render json: @cart_item.errors.full_messages, status: 422
    # end
      items = CartItem.all.select{ |item| item.user_id == current_user.id }
      @cart_item = CartItem.new(cart_item_params)
      temp = {};
      items.map { |cart_item| temp[cart_item.product_id] = cart_item.id} 
      if temp.keys.include?(@cart_item.product_id) 
        @item = CartItem.find_by(id: temp[@cart_item.product_id])
        @item.quantity = @item.quantity + @cart_item.quantity
        if @item.save && logged_in? 
          @cart_items = CartItem.all.select{ |item| item.user_id == current_user.id }
          render :index
        else 
            render json: @cart_item.errors.full_messages, status: 422
        end
      else 
        if @cart_item.save && logged_in? 
          @cart_items = CartItem.all.select{ |item| item.user_id == current_user.id }
          render :index
        else 
          render json: @cart_item.errors.full_messages, status: 422
        end
      end
    end

  def destroy 
    @cart_item = CartItem.find_by(id: params[:id])
    if @cart_item.destroy 
      @cart_items = CartItem.all.select{ |item| item.user_id == current_user.id }
      render :index
    else
      render json: @cart_item.errors.full_messages, status: 404 
    end
  end

  private 
  def cart_item_params 
    params.require(:cartItem).permit(:user_id, :product_id, :quantity)
  end
  
end

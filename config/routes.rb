Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:show, :create, :index]
    resources :cart_items, only: [:index, :show, :create, :update, :destroy]
    resources :products, only: [:show, :create, :index] do
      resources :reviews, only: [:index]
    end
    resources :reviews, only: [:create, :update, :destroy]
    resources :categories, only: [:index, :create, :show]
  end
  root to: "static_pages#root"
end

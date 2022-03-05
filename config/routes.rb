Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"


  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]

    resources :users, only: [:index, :show, :create, :update, :destroy] do 
      resources :channels, only: [:index]
    end 

    resources :channels, only: [:index, :create, :show, :update, :destroy] do 
      resources :users, only: [:index]
      resources :cmessages, only: [:create, :index]
    end 

    resources :channel_users, only: [:index, :create, :update, :destroy]

    resources :dmessages, only: [:create, :index, :update, :show]
    mount ActionCable.server, at: '/cable'  
  end 
  
end

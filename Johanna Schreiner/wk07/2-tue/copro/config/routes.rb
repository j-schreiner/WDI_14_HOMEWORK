Rails.application.routes.draw do

  resources :likes
  resources :comments
  resources :projects, only: [:new, :create, :show]  

  get '/', to: 'pages#home'

  get '/login', to: 'sessions#new'
  post '/session', to: 'sessions#create'

  resources :users

end

Rails.application.routes.draw do

  resources :dishes

               #controller file & method
               
  root to: 'pages#home'
  # get '/', to: 'pages#home'

  get '/about', to: 'pages#about'

  # get '/dishes/new', to 'dishes#new' ... less specific than '/dishes/:id'
  # post '/dishes', to 'dishes#create'
  # get '/dishes/:id', to 'dishes#show'
  # get '/dishes', to 'dishes#index'
  # delete '/dishes/:id', to dishes#destroy



end

Rails.application.routes.draw do
  resources :pokemons
  
  get '/', to: 'pokemons#index'
end

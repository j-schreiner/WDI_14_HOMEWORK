Rails.application.routes.draw do

  get '/', to: "houses#index"
  resource :houses #, only: [:index, :show]
  resources :students #, only: [:index, :show, :create]

end

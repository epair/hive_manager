Rails.application.routes.draw do
  namespace :api do
    post '/login', to: 'authentication#login'
    resources :hives, only: [:index, :create]
    resources :inspections, only: [:index, :create]
  end

  root to: 'dashboard#show'
  get '*path', to: 'dashboard#show'
end

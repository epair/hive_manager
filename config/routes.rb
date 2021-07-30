Rails.application.routes.draw do
  namespace :api do
    post '/login', to: 'authentication#login'
  end

  root to: 'dashboard#show'
  get '*path', to: 'dashboard#show'
end

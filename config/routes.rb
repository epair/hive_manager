Rails.application.routes.draw do
  constraints Clearance::Constraints::SignedIn.new do
    root to: 'hives#index'
    resources :hives
  end
end

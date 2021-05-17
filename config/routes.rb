Rails.application.routes.draw do
  root to: 'hives#index'
  constraints Clearance::Constraints::SignedIn.new do
    resources :hives do
      resources :inspections
    end
  end
end

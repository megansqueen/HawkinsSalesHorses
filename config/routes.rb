Rails.application.routes.draw do
  resources :horses
  
  post "/createprofile", to: "users#create"
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "session#destroy"
  
end

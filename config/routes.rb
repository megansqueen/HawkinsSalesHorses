Rails.application.routes.draw do
  resources :horses
  resources :users
  
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "session#create"
  delete "/logout", to: "session#destroy"
  delete "/delete", to: "horse#destroy"
  post "/addHorse", to: "horse#create"
  
end

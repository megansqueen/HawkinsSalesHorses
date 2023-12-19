Rails.application.routes.draw do
  resources :offers
  resources :horses
  resources :users
  
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "session#create"
  delete "/logout", to: "session#destroy"
  delete "/delete", to: "horses#destroy"
  post "/addHorse", to: "horses#create"
  post "/offers", to: "offers#create"
  patch "/image", to: "horses#update_image"
  get "/horses", to: "horses#index"
  patch "/offerUpdate", to: "offers#update"
  
end

Rails.application.routes.draw do
  namespace :api do
    post :session, to: 'session#create', as: :sign_in
    delete 'session/:key', to: 'session#destroy', as: :sign_out

    resources :registrations, only: :create

    resources :requests, only: :create
  end

  get '*unmatched_route', to: 'pages#home'
  root to: 'pages#home'
end

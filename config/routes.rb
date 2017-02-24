Rails.application.routes.draw do
  namespace :api do
    post :session, to: 'session#create', as: :sign_in
    delete 'session/:key', to: 'session#destroy', as: :sign_out
    post :token, to: 'session#refresh', as: :refresh_token

    resources :registrations, only: :create

    resources :requests, only: [:index, :create] do
      post :close, on: :member
      resources :comments, only: :create
    end

    resources :users, only: [:index, :update]
  end

  get '*unmatched_route', to: 'pages#home'
  root to: 'pages#home'
end

Rails.application.routes.draw do
  namespace :api do
    post :session, to: 'session#create', as: :sign_in
    delete 'session/:key', to: 'session#destroy', as: :sign_out
  end

  get '*unmatched_route', to: 'pages#home'
  root to: 'pages#home'
end

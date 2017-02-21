Rails.application.routes.draw do
  namespace :api do
    post :session, to: 'session#create'
  end

  get '*unmatched_route', to: 'pages#home'
  root to: 'pages#home'
end

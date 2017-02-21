Rails.application.routes.draw do
  get '*unmatched_route', to: 'pages#home'
  root to: 'pages#home'
end

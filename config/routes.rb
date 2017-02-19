Rails.application.routes.draw do
  get '*unmatched_route', to: 'pages#home'
end

Rails.application.routes.draw do
  resources :retros
  get '/' => 'greetings#hello'
end

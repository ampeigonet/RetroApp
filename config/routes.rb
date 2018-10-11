Rails.application.routes.draw do
  resources :retros, :only => [:new] # this will change when more features get implemented for retros
  get '/' => 'greetings#hello'
end

Rails.application.routes.draw do
  get 'retro/new'
  root to: 'greetings#index'
end

class GreetingsController < ApplicationController
  def index
    @message = 'Welcome to Wye RetroApp!'
    @title = 'Home - WyeRetroApp'
  end
end

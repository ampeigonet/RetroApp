# Main methods for localhost:3000
class GreetingsController < ApplicationController
  def hello
    @message = 'Welcome to Wye RetroApp !'
  end
end

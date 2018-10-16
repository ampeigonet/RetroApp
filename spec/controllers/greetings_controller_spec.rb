require 'rspec'
require 'spec_helper'
require_relative '../../app/controllers/greetings_controller.rb'

RSpec.describe GreetingsController do
  describe 'hello method' do
    it 'should get hello successfully' do
      get :hello
      expect(response.status).to eq(200)
    end

    it 'should render hello template' do
      get :hello
      expect(response).to render_template('hello')
    end
  end
end

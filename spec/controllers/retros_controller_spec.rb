require 'rspec'
require 'spec_helper'
require_relative '../../app/controllers/retros_controller.rb'

RSpec.describe RetrosController do
  describe 'new method' do
    it 'should get new' do
      get :new
      expect(response.status).to eq(200)
    end

    it 'should render new retro template' do
      get :new
      expect(response).to render_template('new')
    end
  end
end

require 'rails_helper'

RSpec.describe GreetingsController do
  describe 'index method' do
    it 'should get index successfully' do
      get :index
      expect(response.status).to eq(200)
    end

    it 'should render index template' do
      get :index
      expect(response).to render_template('index')
    end
  end
end

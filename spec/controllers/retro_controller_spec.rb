require 'spec_helper'

RSpec.describe RetroController do
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

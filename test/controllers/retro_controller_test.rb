require 'test_helper'

class RetroControllerTest < ActionDispatch::IntegrationTest
  test 'should get new' do
    get retro_new_url
    assert_response :success
  end
end

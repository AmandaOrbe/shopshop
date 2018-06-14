require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get nosotros" do
    get pages_nosotros_url
    assert_response :success
  end

  test "should get historia" do
    get pages_historia_url
    assert_response :success
  end

  test "should get prensa" do
    get pages_prensa_url
    assert_response :success
  end

  test "should get pasarela" do
    get pages_pasarela_url
    assert_response :success
  end

  test "should get tiendas" do
    get pages_tiendas_url
    assert_response :success
  end

end

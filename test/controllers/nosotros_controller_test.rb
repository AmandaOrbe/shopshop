require 'test_helper'

class NosotrosControllerTest < ActionDispatch::IntegrationTest
  test "should get nosotros" do
    get nosotros_nosotros_url
    assert_response :success
  end

  test "should get historia" do
    get nosotros_historia_url
    assert_response :success
  end

  test "should get prensa" do
    get nosotros_prensa_url
    assert_response :success
  end

  test "should get pasarela" do
    get nosotros_pasarela_url
    assert_response :success
  end

  test "should get tiendas" do
    get nosotros_tiendas_url
    assert_response :success
  end

end

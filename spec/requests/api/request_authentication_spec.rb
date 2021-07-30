require "rails_helper"

RSpec.describe "Authenticating with the API" do
  before do
    Rails.application.routes.draw do
      get "/api/test" => "test#index"
    end
  end

  after do
    Rails.application.reload_routes!
  end

  context "when the user provides a valid api token" do
    it "allows the user to pass" do
      user = FactoryBot.create(:user)
      credentials = authenticate_with_token(user.token)

      get "/api/test", headers: { "Authorization" => credentials }

      expect(response).to be_successful
      expect(response.body).to eq({ "message" => "Hello world!" }.to_json)
    end
  end

  context "when the user provides an invalid api token" do
    it "does not allow to user to pass" do
      credentials = authenticate_with_token("not-secret")

      get "/api/test", headers: { "Authorization" => credentials }

      expect(response).to be_unauthorized
    end
  end

  private

  TestController = Class.new(Api::BaseController) do
    def index
      render json: { message: "Hello world!" }
    end
  end

  def authenticate_with_token(token)
    ActionController::HttpAuthentication::Token.encode_credentials(token)
  end
end

module Helpers
  def authenticate_with_token(token)
    ActionController::HttpAuthentication::Token.encode_credentials(token)
  end

  def response_body
    JSON.parse(response.body)
  end
end

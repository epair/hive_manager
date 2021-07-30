class User < ApplicationRecord
  has_secure_password

  has_many :hives

  before_save :generate_token

  def generate_token
    self.token = JsonWebToken.encode({ email: email, password: password })
  end
end

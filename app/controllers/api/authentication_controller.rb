class Api::AuthenticationController < ApplicationController
  def login
    @user = User
      .find_by(email: user_params[:email])
      &.authenticate(user_params[:password])

    if @user
      render json: { token: JsonWebToken.encode(user_params.as_json) }
    else
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end

class Api::AuthenticationController < Api::BaseController
  skip_before_action :authenticate, only: [:login]

  def login
    @user = User
      .find_by(email: user_params[:email])
      &.authenticate(user_params[:password])

    if @user
      render json: { token: @user.token }
    else
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end

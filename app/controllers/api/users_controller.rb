class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
  end
  
  def show
  end
  
  def update
  end
  
  def destroy
  end

  private
  def user_params
    params.require(:user).permit(:email, :username, :password, :first_name, :last_name)
  end
end

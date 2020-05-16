class Api::UsersController < ApplicationController
  # skip_before_action :verify_authenticity_token ## remove
  
  def create
    @user = User.new(user_params)
    @user.is_verified = false
    
    if @user.save
      login(@user)
      render "api/users/show"
    else 
      render json: @user.errors.full_messages, status: 422
    end
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

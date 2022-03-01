class Api::SessionsController < ApplicationController

  def show
    @user = User.find_by(id: params[:id])
    render 'api/users/show'
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    
    if @user
      login(@user)
      render '/api/users/show'
    else
      render json: ["Invalid credentials"], status: 422
    end
  end

  def destroy
    @user = current_user

    if @user
      logout
      render '/api/users/show'
    else
      render json: ["Can not sign user out"], status: 422
    end
  end

end

class Api::UsersController < ApplicationController

  def index 
    @users = User.all
    render 'api/users/index'
  end 

  def show
    @user = User.find_by(id: params[:id])
    render 'api/users/show'
  end

  def create
    @user = User.new(user_params)
    @channel = Channel.find_by(name: "general")
    if @user.save 
      login(@user)
      ChannelUser.create(user_id: @user.id, channel_id: @channel.id)
      render '/api/users/show'
    else  
      render json: @user.errors.full_messages, status: 422
    end 
  end 

  private

  def user_params
    params.require(:user).permit(:email, :username, :password)
  end

end

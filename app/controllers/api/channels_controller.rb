class Api::ChannelsController < ApplicationController

  def index 
    if params[:user_id]
      @channels = current_user.channels 
      render :index
    else  
      @channels = Channel.all
      render :index
    end 
  end 

  def show
    @channel = Channel.find(params[:id])
    render json: @channel
  end 

  def create 
    @channel = Channel.new(channel_params)

    if @channel.save
      ChannelUser.create(channel_id: @channel.id, user_id: current_user.id)
      render :show 
    else
      render json: ["invalid creation"], status: 422
    end 
  end 
  
  def update 
    @channel = Channel.find(params[:id])
    
    if @channel.update(channel_params)
      render :show 
    else 
      render json: @channel.errors.full_messages, status:422
    end 
  end 

  def destroy 
    @channel = Channel.find(params[:id])
    @channel.deestroy
  end 
    
  private 
  
  def channel_params
    params.require(:channel).permit(:name, :public, :description, :admin_id)
  end 

end

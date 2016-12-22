class RobotsController < ApplicationController

  # get all robots
  def index
    render json: Robot.all
  end

  # get specific robot
  def show
    render json: Robot.find_by_id(params[:id])
  end

  # post request
  def create
    new_robot = Robot.new(permitted_params)
    if new_robot.save
      render json: new_robot
    else
      render status: 422
    end
  end

  # put request
  def update
    found_robot = Robot.find_by_id(params[:id])
    saved = found_robot.update(permitted_params)
    if saved
      render status: 204
    else
      render status: 422
    end
  end

  # delete request
  def destroy
    found_robot = Robot.find_by_id(params[:id])
    if found_robot.destroy
      render status: 204
    else
      render status: 422
    end
  end

  private

  # limits what a user can update or send when creating a robot
  def permitted_params
    params.require(:robot).permit(:name, :avatar, :skill, :serial)
  end

end

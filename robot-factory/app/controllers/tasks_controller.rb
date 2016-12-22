class TasksController < ApplicationController

  # get all tasks from a specific robot
  def index
    # Find a specific robot within the database by its id
    found_robot = Robot.find_by_id(params[:robot_id])
    # render all the tasks that are connected to this robot's id
    render json: found_robot.tasks
  end

  # create a task for a specific robot
  def create
    # find a specific robot by its id
    found_robot = Robot.find_by_id(params[:robot_id])
    # create a new task - permitted_params makes sure that only the params specified below are allowed
    new_task = Task.new(permitted_params)
    # push this new task into the array of tasks for the specific robot identified above
    found_robot.tasks << new_task

    # if new_task exisits/is saved, render new_task
    if !new_task.new_record?
      render json: new_task
    else
      # else, render this error code
      render status: 422
    end
  end

  # update a task for a specific robot
  def update
    # find a specific robot by its id
    found_robot = Robot.find_by_id(params[:robot_id])
    # find a specific task for the robot that is found above by the task id
    task = found_robot.tasks.find_by_id(params[:id])
    # update this task passing in all the params required below
    saved = task.update(permitted_params)

    # if the task was updated, render an okay status
    if saved
      render status: 204
    else
      # else, render an error status
      render status: 422
    end
  end

  # find a specific robot by its id
  def destroy
    found_robot = Robot.find_by_id(params[:robot_id])
    # find a specific task of the robot above by the task id
    task = found_robot.tasks.find_by_id(params[:id])
    # delete the task from the db
    deleted = task.destroy

    # if the task is deleted, render an OK status
    if deleted
      render status: 204
    else
      # if it was not deleted, render an error status
      render status: 422
    end
  end


  private
  # specifies that these params are the only thing that can added, updated, etc.
  def permitted_params
    params.require(:task).permit(:name, :description, :completed)
  end

end

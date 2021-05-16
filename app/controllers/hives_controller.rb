class HivesController < ApplicationController

  def index
    @hives = Hive.where(user: current_user)
  end

  def show
    @hive = Hive.find(params[:id])
    @inspections = @hive.inspections
  end

  def new
    @hive = Hive.new
  end

  def create
    @hive = current_user.hives.new(hive_params)

    if @hive.save
      redirect_to @hive
    else
      render :new
    end
  end

  private

  def hive_params
    params.require(:hive).permit(:name)
  end
end

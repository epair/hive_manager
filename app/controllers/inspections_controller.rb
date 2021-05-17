class InspectionsController < ApplicationController
  def new
    @hive = Hive.find(params[:hive_id])
    @inspection = Inspection.new
  end

  def create
    @hive = Hive.find(params[:hive_id])
    @inspection = @hive.inspections.new(inspection_params)

    if @inspection.save
      redirect_to hive_path(@hive)
    else
      render :new
    end
  end

  private

  def inspection_params
    params.require(:inspection).permit(:population_size, :date)
  end
end
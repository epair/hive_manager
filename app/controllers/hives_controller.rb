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
    @address = @hive.addresses.new
    @queen = Queen.new
  end

  def create
    @hive = current_user.hives.new(hive_params)

    if installed_colony?
      @queen = Queen.new(queen_params)
      @hive_queen = @hive.hive_queens.new(queen: @queen, current: true)
      if @hive.save && @queen.save && @hive_queen.save
        redirect_to @hive
      else
        render :new
      end
    else
      if @hive.save
        redirect_to @hive
      else
        render :new
      end
    end
  end

  private

  def installed_colony?
    params.require(:hive).permit(:installed_colony)
  end

  def hive_params
    params.require(:hive).permit(:name, addresses_attributes: [ :id, :street, :street2, :city, :state, :zip_code ])
  end

  def queen_params
    params.require(:hive).require(:queen).permit(:breed)
  end
end

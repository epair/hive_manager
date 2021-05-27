class HivesController < ApplicationController

  def index
    @hives = Hive.
      where(user: current_user).
      to_json(methods: [:queen_status,
                       :honey_stores,
                       :condition,
                       :number_of_frames,
                       :potential_swarm,
                       :brood,
                       :feeder,
                       :number_of_boxes,
                       :one_line_address])
  end

  def show
    @hive = Hive.find(params[:id])
    @inspections = @hive.inspections.to_json(methods: :brood)
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
    end

    if @queen.try(:save) && @hive_queen.try(:save) && @hive.save
      redirect_to @hive
    elsif @hive.save
      redirect_to @hive
    else
      render :new
    end
  end

  private

  def installed_colony?
    params.require(:hive).permit(:installed_colony)[:installed_colony] == 1
  end

  def hive_params
    params.require(:hive).permit(:name, addresses_attributes: [ :id, :street, :street2, :city, :state, :zip_code ])
  end

  def queen_params
    params.require(:hive).require(:queen).permit(:breed)
  end
end

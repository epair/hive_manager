module Api
  class HivesController < Api::BaseController
    def index
      @hives = Hive.where(user: current_user)

      render json: { hives: @hives }, methods: %i[
        queen_status
        honey_stores
        condition
        number_of_frames
        potential_swarm
        brood
        feeder
        number_of_boxes
        one_line_address
      ]
    end

    def create
      @hive = current_user.hives.new(hive_params)

      if installed_colony?
        @queen = Queen.new(queen_params)
        @hive_queen = @hive.hive_queens.new(queen: @queen, current: true)
      end

      if @queen.try(:save) && @hive_queen.try(:save) && @hive.save
        render json: { hive: @hive, queen: @queen }, status: :created
      elsif @hive.save
        render json: { hive: @hive }, status: :created
      else
        render json: @hive.errors.full_messages, status: :unprocessable_entity
      end
    end

    private

    def installed_colony?
      params.require(:hive).permit(:installed_colony)[:installed_colony]
    end

    def hive_params
      params.require(:hive).permit(:name, addresses_attributes: %i[id street street2 city state zip_code])
    end

    def queen_params
      params.require(:hive).permit(:breed)
    end
  end
end

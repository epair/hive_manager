module Api
  class InspectionsController < Api::BaseController
    def index
      @inspections = current_user.inspections
      render json: { inspections: @inspections }, methods: :brood
    end

    def create
      @hive = Hive.find(inspection_params[:hive_id])
      @inspection = @hive.inspections.new(inspection_params)

      if @inspection.save
        render json: { inspection: @inspection }, status: :created, methods: :brood
      else
        render json: { message: @inspection.errors.full_messages }, status: :unprocessable_entity
      end
    end

    private

    def inspection_params
      params
        .require(:inspection)
        .permit(
          :hive_id,
          :date,
          :queen_status,
          :honey_stores,
          :condition,
          :number_of_frames,
          :potential_swarm,
          :egg_brood,
          :larvae_brood,
          :capped_brood,
          :feeder,
          :number_of_boxes,
          :notes
        )
    end
  end
end

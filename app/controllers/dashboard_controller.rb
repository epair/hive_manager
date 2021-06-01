class DashboardController < ApplicationController
  def show
    hives = Hive
             .where(user: current_user)
             .map{ |h| h.attributes.symbolize_keys.merge({ 
               queen_status: h.queen_status,
               honey_stores: h.honey_stores,
               condition: h.condition,
               number_of_frames: h.number_of_frames,
               number_of_boxes: h.number_of_boxes,
               potential_swarm: h.potential_swarm,
               brood: h.brood,
               feeder: h.feeder,
               one_line_address: h.one_line_address
             })}

    inspections = Hive
                   .where(user: current_user)
                   .includes(:inspections)
                   .flat_map { |h|
                     h.inspections.map { |i|
                       i.attributes.symbolize_keys.merge({
                     brood: h.brood
                   })}}

    @props = {
      current_user: current_user,
      signed_in: signed_in?,
      hives: hives,
      inspections: inspections
    }
  end
end

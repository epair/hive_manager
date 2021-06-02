require 'rails_helper'

RSpec.describe "Dashboard", type: :request do
  describe "GET /show" do
    it 'renders show page' do
      user = FactoryBot.create(:user)
      hive = FactoryBot.create(:hive, user: user)
      address = FactoryBot.create(:address, addressable: hive)
      inspection = FactoryBot.create(:inspection, hive: hive)

      get root_path(as: user)

      props = assigns(:props)

      expected_props = {
        current_user: user,
        signed_in: true,
        hives: [{
          id: hive.id,
          user_id: user.id,
          name: hive.name,
          created_at: hive.created_at,
          updated_at: hive.updated_at,
          queen_status: hive.queen_status,
          honey_stores: hive.honey_stores,
          condition: hive.condition,
          number_of_frames: hive.number_of_frames,
          number_of_boxes: hive.number_of_boxes,
          potential_swarm: hive.potential_swarm,
          brood: hive.brood,
          feeder: hive.feeder,
          one_line_address: hive.one_line_address
        }],
        inspections: [{
          id: inspection.id,
          hive_id: hive.id,
          created_at: inspection.created_at,
          updated_at: inspection.updated_at,
          date: inspection.date,
          queen_status: inspection.queen_status,
          honey_stores: inspection.honey_stores,
          condition: inspection.condition,
          number_of_frames: inspection.number_of_frames,
          potential_swarm: inspection.potential_swarm,
          egg_brood: inspection.egg_brood,
          larvae_brood: inspection.larvae_brood,
          capped_brood: inspection.capped_brood,
          feeder: inspection.feeder,
          number_of_boxes: inspection.number_of_boxes,
          notes: inspection.notes,
          brood: inspection.brood
        }]
      }

      expect(response).to render_template(:show)
      expect(props).to eq(expected_props)
    end
  end
end

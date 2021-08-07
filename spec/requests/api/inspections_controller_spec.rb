require 'rails_helper'

RSpec.describe 'Hives Api', type: :request do
  let(:user) { FactoryBot.create(:user) }
  let(:credentials) { authenticate_with_token(user.token) }
  let(:hive) { FactoryBot.create(:hive, user: user) }

  describe 'GET /api/inspections' do
    let!(:inspections) { FactoryBot.create_list(:inspection, 5, hive: hive) }

    before do
      get "/api/inspections", headers: { Authorization: credentials }
    end

    it 'returns an array of inspections' do
      expect(response_body["inspections"]).to eq(JSON.parse(inspections.to_json(methods: [:brood])))
    end

    it 'returns a successful status' do
      expect(response).to be_successful
    end
  end

  describe 'POST /api/inspections' do
    context 'with valid params' do
      let(:params) { {
        inspection: {
          number_of_boxes: 2,
          number_of_frames: 4,
          feeder: true,
          queen_status: :right,
          condition: :healthy,
          hive_id: hive.id
        }
      } }

      before do
        post "/api/inspections",
          params: params,
          headers: { Authorization: credentials }
      end

      it 'returns created hive resource' do
        expect(response_body["inspection"]["queen_status"]).to eq(params[:inspection][:queen_status].to_s)
        expect(response_body["inspection"]["condition"]).to eq(params[:inspection][:condition].to_s)
      end

      it 'returns a created status' do
        expect(response).to be_created
      end
    end
  end
end

require 'rails_helper'

RSpec.describe 'Hives Api', type: :request do
  let(:user) { FactoryBot.create(:user) }
  let(:credentials) { authenticate_with_token(user.token) }

  describe 'GET /api/hives' do
    let!(:hives) { FactoryBot
      .create_list(:hive, 5, user: user)
      .to_json(
        methods: %i[
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
      )
    }

    before do
      get '/api/hives', headers: { Authorization: credentials }
    end

    it 'returns an array of hives' do
      expect(response_body).to eq(JSON.parse(hives))
    end

    it 'returns a successful status' do
      expect(response).to be_successful
    end
  end

  describe 'POST /api/hives' do
    context 'when submitting just a hive name' do
      context 'with valid params' do
        let(:params) { { hive: { name: 'My hive' } } }

        before do
          post '/api/hives',
            params: params,
            headers: { Authorization: credentials }
        end

        it 'returns created hive resource' do
          expect(response_body["name"]).to eq(params[:hive][:name])
        end

        it 'returns a created status' do
          expect(response).to be_created
        end
      end

      context 'with invalid params' do
        before do
          params = { hive: { name: '' } }
          post '/api/hives', params: params, headers: { Authorization: credentials }
        end

        it 'renders unauthorized error message' do
          expect(response_body).to eq(["Name can't be blank"])
        end

        it 'returns a unprocessable_entity status' do
          expect(response).to have_http_status(:unprocessable_entity)
        end
      end
    end

    context 'when a colony is already installed' do
      context 'with valid params' do
        let(:params) { {
          hive: {
            name: 'My hive',
            installed_colony: true
          },
          queen: {
            breed: :italian
          }
        } }

        before do
          post '/api/hives',
            params: params,
            headers: { Authorization: credentials }
        end

        it 'renders hive and queen resources' do
          expect(response_body["hive"]["name"]).to eq(params[:hive][:name])
          expect(response_body["queen"]["breed"]).to eq(params[:queen][:breed].to_s)
        end

        it 'returns a created status' do
          expect(response).to be_created
        end
      end
    end
  end
end

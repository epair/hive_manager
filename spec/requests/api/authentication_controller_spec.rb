require 'rails_helper'

RSpec.describe 'Authentication', type: :request do
  describe 'POST /api/login' do
    context 'with valid email and password' do
      let(:user) { FactoryBot.create(:user) }
      let(:params) { { user: { email: user.email, password: user.password } } }

      before do
        post '/api/login', params: params
      end

      it 'returns json web token' do
        token = JSON.parse(response.body)['token']
        expect(token).to eq(JsonWebToken.encode(params[:user]))
      end

      it 'returns a successful status' do
        expect(response).to be_successful
      end
    end

    context 'with invalid email and password' do
      before do
        params = { user: { email: 'Bad email', password: 'bad password' } }
        post '/api/login', params: params
      end

      it 'renders unauthorized error message' do
        expect(JSON.parse(response.body)['error']).to eq('Unauthorized')
      end

      it 'returns a successful status' do
        expect(response).to be_unauthorized
      end
    end
  end
end

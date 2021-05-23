require 'rails_helper'

RSpec.describe Address, type: :model do
  describe '#line3' do
    it 'returns a string with city, state, and zip code' do
      address = FactoryBot.create(:address)

      expect(address.line3).to include(address.city)
      expect(address.line3).to include(address.state)
      expect(address.line3).to include(address.zip_code)
    end
  end
end

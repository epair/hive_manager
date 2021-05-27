require 'rails_helper'

RSpec.describe Address, type: :model do
  describe '#one_line' do
    it 'returns a string with the full address' do
      address = FactoryBot.create(:address)

      expected_string = "#{address.street} #{address.street2} #{address.line3}"
      expect(address.one_line).to eq(expected_string)
    end
  end

  describe '#line3' do
    it 'returns a string with city, state, and zip code' do
      address = FactoryBot.create(:address)

      expect(address.line3).to include(address.city)
      expect(address.line3).to include(address.state)
      expect(address.line3).to include(address.zip_code)
    end
  end
end

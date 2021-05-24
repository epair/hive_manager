require 'rails_helper'

RSpec.describe Hive, type: :model do
  describe '#current_address' do
    it 'returns the most recent address' do
      hive = FactoryBot.create(:hive)
      address = FactoryBot.create(:address, addressable: hive)

      expect(hive.current_address).to eq(address)
    end
  end
end

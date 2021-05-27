require 'rails_helper'

RSpec.describe Hive, type: :model do
  describe '#current_address' do
    it 'returns the most recent address' do
      hive = FactoryBot.create(:hive)
      address = FactoryBot.create(:address, addressable: hive)

      expect(hive.current_address).to eq(address)
    end
  end

  describe '#most_recent_inspection' do
    it 'returns the most recent inspection by entered date' do
      hive = FactoryBot.create(:hive)
      first_inspection = FactoryBot.create(:inspection, hive: hive, date: '01-01-2021')
      most_recent_inspection = FactoryBot.create(:inspection, hive: hive, date: '01-02-2021')

      expect(hive.most_recent_inspection).to eq(most_recent_inspection)
    end
  end

  describe '#queen_status' do
    it 'return queen_status from most_recent_inspection' do
      hive = FactoryBot.create(:hive)
      inspection = FactoryBot.create(:inspection, hive: hive, date: '01-01-2021')

      expect(hive.queen_status).to eq(inspection.queen_status)
    end
  end
end

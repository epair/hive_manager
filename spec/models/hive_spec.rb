require 'rails_helper'

RSpec.describe Hive, type: :model do
  describe '#population_size' do
    context 'with inspections' do
      it 'returns the pop size from the most recent inspection' do
        hive = FactoryBot.create(:hive)
        inspection = FactoryBot.create(:inspection, hive: hive)

        expect(hive.population_size).to eq(inspection.population_size)
      end
    end
    context 'without any inspections' do
      it 'returns nil' do
        hive = FactoryBot.create(:hive)

        expect(hive.population_size).to be_nil
      end
    end
  end

  describe '#current_address' do
    it 'returns the most recent address' do
      hive = FactoryBot.create(:hive)
      address = FactoryBot.create(:address, addressable: hive)

      expect(hive.current_address).to eq(address)
    end
  end
end

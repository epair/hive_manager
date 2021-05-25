require 'rails_helper'

RSpec.describe Inspection, type: :model do
  describe '#brood' do
    it 'returns an array of existing brood types' do
      inspection = FactoryBot.create(:inspection, egg_brood: true, larvae_brood: true)
      
      expect(inspection.brood).to eq(["Eggs", "Larvae"])
    end
  end
end

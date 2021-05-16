require "rails_helper"

RSpec.feature "Create Inspection" do

  before do
    user = FactoryBot.create(:user)
    hive = FactoryBot.create(:hive, user: user)
    visit hive_path(hive, as: user)
  end

  scenario "valid inputs" do
    click_on 'Add Inspection'
    choose('Small')
    click_on 'Create Inspection'

    expect(page).to have_content('Population size: small')
  end

  xscenario "invalid inputs" do
    click_on 'Add Inspection'
    click_on 'Create Inspection'

    expect(page).to have_content("Population size can't be blank")
  end
end

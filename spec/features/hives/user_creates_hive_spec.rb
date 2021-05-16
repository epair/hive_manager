require "rails_helper"

RSpec.feature "Create Hive" do

  before do
    user = FactoryBot.create(:user)
    visit new_hive_path(as: user)
  end

  scenario "valid inputs" do
    fill_in 'Name', with: 'Hive 1'
    click_on 'Create Hive'

    expect(page).to have_content('Hive 1')
  end

  scenario "invalid inputs" do
    click_on 'Create Hive'

    expect(page).to have_content("Name can't be blank")
  end
end

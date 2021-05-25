require "rails_helper"

RSpec.feature "Create Inspection" do

  before do
    user = FactoryBot.create(:user)
    hive = FactoryBot.create(:hive, user: user)
    visit hive_path(hive, as: user)
  end

  scenario "valid inputs", js: true do
    click_on 'Add Inspection'
    fill_in 'Inspection Date', with: '01/01/2021'
    select 'Right', from: 'Queen Status'
    choose 'Moderate'
    choose 'Healthy'
    fill_in 'Number of Frames', with: '8'
    check 'Potential Swarm'
    click_on 'Create Inspection'

    expect(page).to have_content('2021-01-01')
    expect(page).to have_content('moderate')
    expect(page).to have_content('right')
    expect(page).to have_content('healthy')
    expect(page).to have_content('8')
    expect(page).to have_content('potential swarm')
  end
end

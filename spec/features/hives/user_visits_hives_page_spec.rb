require 'rails_helper'

RSpec.feature 'Visit Hives Page', js: true do
  before do
    @user = FactoryBot.create(:user)
  end

  scenario 'sees list of hives with current statuses' do
    hive = FactoryBot.create(:hive, user: @user)
    address = FactoryBot.create(:address, addressable: hive)
    inspection = FactoryBot.create(:inspection, hive: hive)
    other_hives = FactoryBot.create_list(:hive, 2, user: @user)
    visit(hives_path(as: @user))

    expect(page).to have_content('Hive Name')
    expect(page).to have_content('Address')
    expect(page).to have_content('Queen Status')
    expect(page).to have_content('Honey Stores')
    expect(page).to have_content('Condition')
    expect(page).to have_content('Number of Frames')
    expect(page).to have_content('Number of Boxes')
    expect(page).to have_content('Potential Swarm')
    expect(page).to have_content('Brood')
    expect(page).to have_content('Feeder')
    expect(page).to have_content(hive.name)
    expect(page).to have_content(hive.one_line_address)
    expect(page).to have_content(hive.queen_status)
    expect(page).to have_content(hive.honey_stores)
    expect(page).to have_content(hive.condition)
    expect(page).to have_content(hive.number_of_frames)
    expect(page).to have_content(hive.number_of_boxes)
    expect(page).to have_content(hive.potential_swarm ? 'Yes' : 'No')
    expect(page).to have_content(hive.brood.join(', '))
    expect(page).to have_content(hive.feeder ? 'Yes' : 'No')
    expect(page).to have_content(other_hives.first.name)
    expect(page).to have_content(other_hives.last.name)
  end
end

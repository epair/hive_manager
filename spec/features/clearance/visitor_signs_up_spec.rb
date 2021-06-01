require 'rails_helper'
require 'support/features/clearance_helpers'

RSpec.feature 'Visitor signs up' do
  xscenario 'by navigating to the page' do
    visit sign_in_path

    click_link I18n.t('sessions.form.sign_up')

    expect(current_path).to eq sign_up_path
  end

  xscenario 'with valid email and password', js: true do
    sign_up_with 'valid@example.com', 'password'

    expect_user_to_be_signed_in
  end

  xscenario 'tries with invalid email' do
    sign_up_with 'invalid_email', 'password'

    expect_user_to_be_signed_out
  end

  xscenario 'tries with blank password' do
    sign_up_with 'valid@example.com', ''

    expect_user_to_be_signed_out
  end
end

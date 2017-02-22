require 'rails_helper'

RSpec.describe 'Authentication', js: true do
  let!(:user) { create(:user) }

  scenario 'Sign In and Sign Out' do
    visit '/'
    fill_in :email, with: user.email
    fill_in :password, with: 'password'
    click_on 'Sign In'
    expect(page).to have_text('Welcome back!')
    click_on 'Sign Out'
    expect(page).to have_text('Have a nice day!')
    expect(page).to have_text('Sign In')
  end
end

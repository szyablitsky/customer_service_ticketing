require 'rails_helper'

RSpec.describe 'Authentication', js: true do
  before { create(:user) }

  scenario 'name update' do
    visit '/'
    fill_in :email, with: 'user@example.com'
    fill_in :password, with: 'password'
    click_on 'Sign In'
    expect(page).to have_text('Welcome back!')
  end
end

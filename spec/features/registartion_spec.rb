require 'rails_helper'

RSpec.describe 'Registration', js: true do
  let(:user) { build(:user) }

  scenario 'valid data' do
    visit '/'
    click_on 'Register'
    fill_in :name, with: user.name
    fill_in :email, with: user.email
    fill_in :password, with: 'password'
    click_on 'Register'
    expect(page).to have_text('Welcome!')
  end

  scenario 'empty form' do
    visit '/'
    click_on 'Register'
    click_on 'Register'
    expect(page).to have_text(%(can't be blank))
  end

  scenario 'existing email' do
    existing_user = create(:user)
    visit '/'
    click_on 'Register'
    fill_in :name, with: existing_user.name
    fill_in :email, with: existing_user.email
    fill_in :password, with: 'password'
    click_on 'Register'
    expect(page).to have_text('has already been taken')
  end
end

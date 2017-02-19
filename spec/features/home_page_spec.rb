require 'rails_helper'

RSpec.describe 'Home page', js: true do
  scenario 'name update' do
    visit '/'
    fill_in :name, with: 'John'
    expect(page).to have_text('Hello, John!')
  end
end

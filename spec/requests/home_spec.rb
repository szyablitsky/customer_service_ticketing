require 'rails_helper'

RSpec.describe 'Home page' do
  it 'responds with success' do
    get '/'
    expect(response).to have_http_status(:success)
  end
end

import 'rails_helper'

RSpec.describe User do
  describe 'downcases email' do
    let(:email) { 'TestEmail@example.com' }
    let(:user) { User.new(email: email) }
    it { expect(user.email).to eq(email.downcase) }
  end
end

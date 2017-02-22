require 'rails_helper'

RSpec.describe Session::Destroy do
  let(:user) { create(:user) }
  let!(:authentication) { create(:authentication, user: user) }
  subject { described_class.run(params) }

  context %(user's authentication) do
    let(:params) { { 'current_user' => user, 'key' => authentication.key } }

    it 'destroys authentication' do
      expect { subject }.to change { Authentication.count }.by(-1)
    end
  end

  context 'other user' do
    let(:params) { { 'current_user' => create(:user), 'key' => authentication.key } }

    it %(doesn't destroy any authentications) do
      expect { subject }.to change { Authentication.count }.by(0)
    end
  end

  context 'wrong key' do
    let(:user) { create(:user) }
    let(:params) { { 'current_user' => user, 'key' => 'wrong' } }

    it %(doesn't destroy any authentications) do
      expect { subject }.to change { Authentication.count }.by(0)
    end
  end
end

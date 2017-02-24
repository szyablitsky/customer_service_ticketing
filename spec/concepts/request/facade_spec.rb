require 'rails_helper'

RSpec.describe Request::Facade do
  describe 'requests' do
    let(:user) { create(:user) }
    subject { described_class.new(user).requests.map(&:id) }

    context 'customer' do
      let!(:request) { create(:request, user: user) }
      let!(:other_user_request) { create(:request) }

      it %(returns only user's requests) do
        is_expected.to match [request.id]
      end
    end

    context 'support' do
      let(:user) { create(:user, role: 'support') }
      let!(:unassigned_request) { create(:request) }
      let!(:assigned_request) { create(:request, support_agent: user) }
      let!(:assigned_to_other_request) { create(:request, support_agent: create(:user)) }

      it 'returns only unassigned and assigned to user requests' do
        is_expected.to match [
          unassigned_request.id,
          assigned_request.id,
        ]
      end
    end

    context 'admin' do
      let(:user) { create(:user, role: 'admin') }
      let!(:unassigned_request) { create(:request) }
      let!(:assigned_request) { create(:request, support_agent: create(:user)) }

      it 'returns all requests' do
        is_expected.to match [
          unassigned_request.id,
          assigned_request.id,
        ]
      end
    end
  end
end

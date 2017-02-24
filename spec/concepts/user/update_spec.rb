require 'rails_helper'

RSpec.describe User::Update do
  let!(:user) { create(:user) }
  let(:admin) { create(:user, role: 'admin') }
  let(:role) { 'support' }
  let(:user_params) { { 'role' => role } }
  subject { described_class.run(params) }

  context 'admin' do
    let(:params) { { current_user: admin, 'id' => user.id, 'user' => user_params } }

    context 'valid params' do
      it %(updates user's role) do
        subject
        expect(user.reload.role).to eq('support')
      end
    end

    context 'empty role' do
      let(:role) { '' }

      it 'returns errors' do
        result, operation = subject

        expect(result).to be false
        expect(operation.errors.keys).to include(:role)
      end
    end

    context 'wrong role' do
      let(:role) { 'superadmin' }

      it 'returns errors' do
        result, operation = subject

        expect(result).to be false
        expect(operation.errors.keys).to include(:role)
      end
    end

    describe 'demoting admin' do
      let(:role) { 'support' }
      let(:params) { { current_user: admin, 'id' => admin.id, 'user' => user_params } }

      context 'last admin' do
        it 'returns errors' do
          result, operation = subject

          expect(result).to be false
          expect(operation.errors.keys).to include(:base)
        end
      end

      context 'another admin exist' do
        before { create(:user, role: 'admin') }

        it 'runs with success' do
          result, operation = subject

          expect(result).to be true
          expect(operation.errors.keys).to be_empty
        end
      end
    end
  end

  context 'other user' do
    let(:params) { { current_user: user, 'id' => user.id, 'user' => user_params } }

    it 'raises error' do
      expect { subject }.to raise_error(Trailblazer::NotAuthorizedError)
    end
  end
end

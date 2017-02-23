require 'rails_helper'

RSpec.describe Request::Close do
  let(:user) { create(:user) }
  let(:request) { create(:request, user: user) }
  let(:params) { { current_user: user, 'id' => request.id } }
  subject { described_class.run(params) }

  context 'valid params' do
    it 'updates open to false' do
      subject
      expect(request.reload.open).to be false
    end
  end

  context 'invalid id' do
    let(:params) { { current_user: user, 'id' => request.id + 1 } }

    it 'raises error' do
      expect { subject }.to raise_error(ActiveRecord::RecordNotFound)
    end
  end

  context 'other user' do
    let(:params) { { current_user: create(:user), 'id' => request.id } }

    it 'raises error' do
      expect { subject }.to raise_error(Trailblazer::NotAuthorizedError)
    end
  end
end

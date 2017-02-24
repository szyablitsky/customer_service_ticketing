require 'rails_helper'

RSpec.describe Request::Create do
  let(:user) { create(:user) }
  subject { described_class.run(params) }

  context 'valid params' do
    let(:request) { { 'subject' => 'subject', 'description' => 'description' } }
    let(:params) { { current_user: user, 'request' => request } }

    it 'creates request' do
      expect { subject }.to change { Request.count }.by(1)
    end

    it 'saves request params' do
      subject
      expect(Request.last.subject).to eq('subject')
      expect(Request.last.description).to eq('description')
    end
  end

  context 'empty params' do
    let(:request) { { 'subject' => '', 'description' => '' } }
    let(:params) { { 'current_user': user, 'request' => request } }

    it 'returns errors' do
      result, operation = subject

      expect(result).to be false
      expect(operation.errors.keys).to include(:subject, :description)
    end
  end

  context 'without user' do
    let(:request) { { 'subject' => 'subject', 'description' => 'description' } }
    let(:params) { { 'request' => request } }

    it 'raises error' do
      expect { subject }.to raise_error(ApplicationPolicy::NotAuthenticatedError)
    end
  end

  context 'user is not a customer' do
    let(:user) { create(:user, role: 'support') }
    let(:request) { { 'subject' => 'subject', 'description' => 'description' } }
    let(:params) { { current_user: user, 'request' => request } }

    it 'raises error' do
      expect { subject }.to raise_error(Trailblazer::NotAuthorizedError)
    end
  end
end

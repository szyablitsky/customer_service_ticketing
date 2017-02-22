require 'rails_helper'

RSpec.describe 'Request create' do
  let(:user) { create(:user) }
  let(:request) { { subject: 'subject', description: 'description' } }
  let(:params) { { request: request }.to_json }

  describe 'authenticated user' do
    before { post api_requests_url, params: params, headers: headers(user_id: user.id) }

    context 'with valid params' do
      it { expect(response).to have_http_status(:success) }

      it 'responds with request' do
        expect(json).to match(
          'id' => Integer,
          'user_id' => user.id,
          'support_agent_id' => nil,
          'subject' => String,
          'description' => String,
          'open' => true,
          'created_at' => Integer,
          'updated_at' => Integer,
        )
      end
    end

    context 'with invalid params' do
      let(:request) { { subject: '', description: '' } }

      it { expect(response).to have_http_status(:unprocessable_entity) }

      it 'renders errors' do
        expect(json).to match(
          'errors' => {
            'subject' => [%(can't be blank)],
            'description' => [%(can't be blank)],
          },
        )
      end
    end

    context 'with valid params but support agent' do
      let(:user) { create(:user, role: 'suport agent') }

      it { expect(response).to have_http_status(:forbidden) }
    end
  end

  describe 'nonauthenticated user' do
    before { post api_requests_url, params: params, headers: headers_without_authorization }

    it { expect(response).to have_http_status(:unauthorized) }
  end
end

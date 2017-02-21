require 'rails_helper'

RSpec.describe 'Session' do
  describe 'Sign In' do
    let(:email) { 'user@example.com' }
    let(:password) { 'password' }
    let!(:user) { create(:user, email: email, password: password) }

    before { post api_session_url, params: params, headers: headers_without_authorization }

    context 'with invalid params' do
      let(:params) { { session: { email: '', password: '' } }.to_json }

      it { expect(response).to have_http_status(:unprocessable_entity) }

      it 'renders errors' do
        expect(json).to match(
          'errors' => {
            'base' => [
              'Invalid email or password',
            ],
          },
        )
      end
    end

    context 'with valid params' do
      let(:params) { { session: { email: email, password: password } }.to_json }

      it { expect(response).to have_http_status(:success) }

      it 'renders errors' do
        expect(json).to match(
          'user' => Hash,
          'api_key' => String,
          'api_secret' => String,
          'api_token' => String,
        )
      end
    end
  end

  
end

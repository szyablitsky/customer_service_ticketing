require 'rails_helper'

RSpec.describe 'Session' do
  describe 'Sign In' do
    let(:email) { 'user@example.com' }
    let(:password) { 'password' }
    let!(:user) { create(:user, email: email, password: password) }

    before { post api_sign_in_url, params: params, headers: headers_without_authorization }

    context 'with invalid params' do
      let(:params) { { session: { email: '', password: '' } }.to_json }

      it { expect(response).to have_http_status(:unprocessable_entity) }

      it 'responds with errors' do
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

      it 'responds with user and credentials' do
        expect(json).to match(
          'user' => Hash,
          'api_key' => String,
          'api_secret' => String,
          'api_token' => String,
        )
      end
    end
  end

  describe 'Sign Out' do
    before { delete api_sign_out_url('uuid'), headers: headers }

    it { expect(response).to have_http_status(:no_content) }
  end
end

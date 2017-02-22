class API::BaseController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_request
  respond_to :json

  rescue_from(Trailblazer::NotAuthorizedError) { head :forbidden }
  rescue_from(ActiveRecord::RecordNotFound) { head :not_found }
  rescue_from(ApplicationPolicy::NotAuthenticatedError) { head :unauthorized }
  rescue_from(JWT::VerificationError) { head :unauthorized }
  rescue_from(JWT::DecodeError) { head :unauthorized }

  private

  def authenticate_request
    params[:current_user] = user_from_token
  end

  def user_from_token
    user_id_in_token? ? find_user(auth_token['user_id']) : nil
  end

  def find_user(user_id)
    User.where(id: user_id).first
  end

  def http_token
    return @http_token if defined?(@http_token)
    header = request.headers['Authorization']
    auth_type, token = header.to_s.split(' ')
    @http_token = auth_type == 'Bearer' ? token : nil
  end

  def auth_token
    @auth_token ||= AccessToken.decode(http_token)
  end

  def user_id_in_token?
    http_token && auth_token && auth_token['user_id'].to_i
  end
end

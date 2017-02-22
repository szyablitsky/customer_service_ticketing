class API::RegistrationsController < API::BaseController
  skip_before_action :authenticate_request

  def create
    respond Registration::Create, location: nil
  end
end

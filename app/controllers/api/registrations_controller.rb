class API::RegistrationsController < API::BaseController
  def create
    respond Registration::Create, location: nil
  end
end

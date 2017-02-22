class API::RequestsController < API::BaseController
  def create
    respond Request::Create, location: nil
  end
end

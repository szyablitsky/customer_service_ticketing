class API::SessionController < API::BaseController
  def create
    respond Session::Create, location: nil
  end
end

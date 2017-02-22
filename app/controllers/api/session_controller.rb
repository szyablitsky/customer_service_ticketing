class API::SessionController < API::BaseController
  skip_before_action :authenticate_request

  def create
    respond Session::Create, location: nil
  end

  def refresh
    respond Session::Refresh, location: nil
  end

  def destroy
    respond Session::Destroy
  end
end

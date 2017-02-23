class API::RequestsController < API::BaseController
  def index
    respond Request::Index
  end

  def create
    respond Request::Create, location: nil
  end

  def close
    respond Request::Close, location: nil
  end
end

class API::UsersController < API::BaseController
  def index
    respond User::Index
  end
end

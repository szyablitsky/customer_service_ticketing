class API::UsersController < API::BaseController
  def index
    respond User::Index
  end

  def update
    respond User::Update
  end
end

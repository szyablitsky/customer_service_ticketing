class Request::Facade
  def initialize(user)
    @user = user
  end

  def requests
    Request.order(created_at: :desc)
  end
end

class Request::Facade
  def initialize(user)
    @user = user
  end

  def requests
    case user.role
    when 'customer' then scope.where(user: user)
    when 'support agent' then scope.where(support_agent: [user.id, null])
    when 'admin' then scope
    end.all
  end

  private

  attr_reader :user

  def scope
    Request.order(created_at: :desc)
  end
end

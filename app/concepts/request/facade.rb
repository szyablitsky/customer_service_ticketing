class Request::Facade
  def initialize(user)
    @user = user
  end

  def requests
    @requests ||=
      case user.role
      when 'customer' then scope.where(user: user)
      when 'support' then scope.where(support_agent_id: [user.id, nil])
      when 'admin' then scope
      end.all
  end

  def comments
    @comments ||= Comment.where(request_id: requests.map(&:id)).order(created_at: :desc)
  end

  def users
    User.where(id: user_ids)
  end

  private

  attr_reader :user

  def scope
    Request.order(created_at: :desc)
  end

  def user_ids
    (requests.map(&:user_id) | comments.map(&:user_id)).uniq
  end
end

class Request::Policy < ApplicationPolicy
  def index?
    true
  end

  def create?
    user.role == 'customer'
  end

  def close?
    model.user == user
  end
end

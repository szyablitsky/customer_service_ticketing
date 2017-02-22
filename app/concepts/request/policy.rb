class Request::Policy < ApplicationPolicy
  def create?
    user.role == 'customer'
  end
end

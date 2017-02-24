class User::Policy < ApplicationPolicy
  def index?
    user.role == 'admin'
  end
end

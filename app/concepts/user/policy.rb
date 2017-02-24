class User::Policy < ApplicationPolicy
  def index?
    admin?
  end

  def update?
    admin?
  end

  private

  def admin?
    user.role == 'admin'
  end
end

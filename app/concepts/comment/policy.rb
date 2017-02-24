class Comment::Policy < ApplicationPolicy
  def create?
    user.role == 'admin' || user.role == 'support' ||
      user.role == 'customer' && model.request.user == user
  end
end

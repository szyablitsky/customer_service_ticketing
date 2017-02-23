class Comment::Policy < ApplicationPolicy
  def create?
    user.role == 'admin' || user.role == 'support agent' ||
      user.role == 'customer' && model.request.user == user
  end
end

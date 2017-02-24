class User::Facade
  def users
    @users ||= scope.all
  end

  private

  def scope
    User.order(created_at: :desc)
  end
end

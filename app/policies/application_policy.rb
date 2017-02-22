# frozen_string_literal: true
class ApplicationPolicy
  class NotAuthenticatedError < StandardError; end

  attr_reader :user, :model

  def initialize(user, model)
    raise_not_authenticated unless user
    @user = user
    @model = model
  end

  private

  def raise_not_authenticated
    raise ApplicationPolicy::NotAuthenticatedError
  end
end

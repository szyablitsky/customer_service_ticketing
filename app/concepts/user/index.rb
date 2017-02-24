class User::Index < ApplicationOperation
  include Policy

  policy User::Policy, :index?

  representer do
    collection :users, decorator: User::Representer
  end

  def model!(*)
    User::Facade.new
  end
end

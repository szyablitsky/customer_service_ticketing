class Request::Index < ApplicationOperation
  include Policy

  policy Request::Policy, :index?

  representer do
    collection :requests, decorator: Request::Representer
    collection :comments, decorator: Comment::Representer
    collection :users, decorator: User::Representer
  end

  def model!(params)
    Request::Facade.new(params[:current_user])
  end
end

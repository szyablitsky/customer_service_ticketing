class API::CommentsController < API::BaseController
  def create
    respond Comment::Create, location: nil
  end
end

class API::RequestsController < API::BaseController
  def create
    puts 'requests create controller'
    respond Request::Create, location: nil
  end
end

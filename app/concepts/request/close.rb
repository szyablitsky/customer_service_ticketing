class Request::Close < ApplicationOperation
  include Policy

  policy Request::Policy, :close?

  representer Request::Representer

  def model!(params)
    Request.find(params['id'])
  end

  def process(*)
    model.update_attribute(:open, false)
  end
end

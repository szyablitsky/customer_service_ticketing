class Request::Create < ApplicationOperation
  include Policy

  policy Request::Policy, :create?

  contract do
    property :subject
    property :description

    validates :subject, presence: true
    validates :description, presence: true
  end

  representer Request::Representer

  def model!(params)
    Request.new(user: params[:current_user], open: true)
  end

  def process(params)
    validate(params['request']) do
      contract.save
    end
  end
end

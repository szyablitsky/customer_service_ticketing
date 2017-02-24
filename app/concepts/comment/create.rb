class Comment::Create < ApplicationOperation
  include Policy

  policy Comment::Policy, :create?

  contract do
    property :content

    validates :content, presence: true
  end

  representer do
    property :comment,
             decorator: Comment::Representer,
             getter: ->(represented:, **) { represented }
    property :request,
             decorator: Request::Representer,
             getter: ->(represented:, **) { represented.request }
  end

  def model!(params)
    @request = Request.find(params['request_id'])
    @user = params[:current_user]
    Comment.new(request: request, user: user)
  end

  def process(params)
    validate(params['comment']) do
      contract.save
      assign_support_agent if user_support_agent?
      reopen_request if reopen?
      request.save if request.changed?
      notify_interlocutor
    end
  end

  private

  attr_reader :request, :user

  def user_support_agent?
    user.role == 'support'
  end

  def reopen?
    user.role == 'customer' && !request.open
  end

  def assign_support_agent
    request.support_agent = user
  end

  def reopen_request
    request.open = true
  end

  def notify_interlocutor
    if user.role == 'customer'
      notify_support_agent if request.support_agent.present?
    else
      notify_customer
    end
  end

  def notify_support_agent
    # todo: send mail to support agent
  end

  def notify_customer
    # todo: send mail to customer
  end
end

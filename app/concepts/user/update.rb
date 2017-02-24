class User::Update < ApplicationOperation
  include Policy

  policy User::Policy, :update?

  contract do
    property :role

    validates :role, presence: true, inclusion: %w(customer support admin)
  end

  representer User::Representer

  def model!(params)
    User.find(params['id'])
  end

  def process(params)
    validate(params['user']) do
      contract.save
    end
  end
end

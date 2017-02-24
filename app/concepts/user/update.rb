class User::Update < ApplicationOperation
  include Policy

  policy User::Policy, :update?

  contract do
    property :role

    validates :role, presence: true, inclusion: %w(customer support admin)
    validate :at_least_ohe_admin

    def at_least_ohe_admin
      return if model.role != 'admin'
      return if role == 'admin'
      return if User.where(role: 'admin').count > 1
      errors.add(:base, 'There must be at least one admin user')
    end
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

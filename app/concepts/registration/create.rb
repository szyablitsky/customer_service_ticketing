class Registration::Create < ApplicationOperation
  contract do
    property :name, virtual: true
    property :email, virtual: true
    property :password, virtual: true
    property :browser
    property :operating_system

    validates :name, presence: true
    validates :email, presence: true
    validates :password, presence: true

    validate :email_uniqueness

    def email_uniqueness
      return if User.where(email: email.downcase).count.zero?
      errors.add(:email, :taken)
    end
  end

  representer AuthenticationRepresenter

  def model!(params)
    user = User.new(
      name: params['registration']['name'],
      email: params['registration']['email'],
      password: params['registration']['password'],
      role: 'customer',
    )
    Authentication.new(
      user: user,
      key: SecureRandom.uuid,
      secret: secret,
    )
  end

  def process(params)
    validate(params['registration']) do
      model.user.save
      model.save
    end
  end

  private

  def secret
    @secret ||= SecureRandom.hex(30)
  end
end

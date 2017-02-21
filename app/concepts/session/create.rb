class Session::Create < ApplicationOperation
  contract do
    property :email, virtual: true
    property :password, virtual: true
    property :browser
    property :operating_system

    validate :login

    def login
      return if model.user.present? && model.user.authenticate(password)
      errors.add(:base, :unauthenticated)
    end
  end

  representer do
    property :user, decorator: User::Representer
    property :api_token, exec_context: :decorator
    property :key, as: :api_key
    property :secret_unencrypted, as: :api_secret

    def api_token
      AccessToken.generate(user_id: represented.user_id)
    end
  end

  def model!(params)
    @user = User.where(email: params['session']['email']).first
    Authentication.new(
      user: @user,
      key: SecureRandom.uuid,
      secret: secret,
    )
  end

  def process(params)
    validate(params['session']) do
      model.save
    end
  end

  private

  def secret
    @secret ||= SecureRandom.hex(30)
  end
end

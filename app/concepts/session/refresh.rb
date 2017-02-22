class Session::Refresh < ApplicationOperation
  UUID_REGEX = /\A[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}\z/

  contract do
    property :api_key, virtual: true
    property :api_secret, virtual: true

    validates :api_key, presence: true, format: { with: UUID_REGEX }
    validates :api_secret, presence: true
    validate :authentication

    def authentication
      return if model.present? && model.authenticate(api_secret)
      errors.add(:base, :unauthenticated)
    end
  end

  representer do
    property :api_token, exec_context: :decorator

    def api_token
      AccessToken.generate(user_id: represented.user_id)
    end
  end

  def model!(params)
    Authentication.where(key: params['api_key']).first
  end

  def process(params)
    validate(params) do
      update_last_used_at
    end
  end

  private

  def update_last_used_at
    model.touch
  end
end

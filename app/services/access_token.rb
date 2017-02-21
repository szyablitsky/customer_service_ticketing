# frozen_string_literal: true
class AccessToken
  ALGORITHM = 'HS256'

  class << self
    def generate(payload)
      exp = Time.now.to_i + 3600
      JWT.encode(payload.merge(exp: exp), hmac_secret, ALGORITHM)
    end

    def decode(token)
      JWT.decode(token, hmac_secret, true, leeway: 30, algorithm: ALGORITHM)[0]
    end

    private

    def hmac_secret
      Rails.application.secrets.secret_key_base
    end
  end
end

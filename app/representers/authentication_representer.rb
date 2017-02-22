class AuthenticationRepresenter < BaseRepresenter
  property :user, decorator: User::Representer
  property :api_token, exec_context: :decorator
  property :key, as: :api_key
  property :secret_unencrypted, as: :api_secret

  def api_token
    AccessToken.generate(user_id: represented.user_id)
  end
end

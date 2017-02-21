module Requests
  module Helpers
    def headers_without_authorization
      {
        'CONTENT_TYPE' => 'application/json',
        'Accept' => 'application/json',
      }
    end

    def headers(auth_params = {})
      headers_without_authorization
        .merge('Authorization' => "Bearer #{AccessToken.generate(auth_params)}")
    end

    def json
      JSON.parse(response.body)
    end
  end
end

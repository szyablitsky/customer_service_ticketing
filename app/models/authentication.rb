class Authentication < ApplicationRecord
  belongs_to :user

  attr_accessor :secret_unencrypted

  def secret=(unencrypted)
    self.secret_digest = BCrypt::Password.create(unencrypted)
    self.secret_unencrypted = unencrypted
  end

  def authenticate(unencrypted)
    BCrypt::Password.new(secret_digest) == unencrypted && self
  end
end

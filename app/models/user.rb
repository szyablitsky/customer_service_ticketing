class User < ApplicationRecord
  has_many :authentications

  def email=(value)
    super(value.downcase)
  end

  def self.digest(string)
    BCrypt::Password.create(string)
  end

  def authenticate(unencrypted)
    BCrypt::Password.new(password_digest) == unencrypted && self
  end

  def password=(unencrypted)
    if unencrypted.nil?
      self.password_digest = nil
    elsif !unencrypted.empty?
      @token = unencrypted
      self.password_digest = User.digest(unencrypted)
    end
  end
end

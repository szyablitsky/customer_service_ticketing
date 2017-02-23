FactoryGirl.define do
  factory :authentication do
    user
    key { SecureRandom.uuid }
    secret { SecureRandom.hex(30) }
    browser 'Chrome'
    operating_system 'Linux'
  end
end

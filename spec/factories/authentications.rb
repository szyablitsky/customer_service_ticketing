# frozen_string_literal: true
FactoryGirl.define do
  factory :authentication do
    user
    key { SecureRandom.uuid }
    secret { SecureRandom.hex(30) }
    browser 'Chrome'
    operating_system 'Linux'
    created_at { Time.now }
    updated_at { Time.now }
  end
end

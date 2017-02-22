FactoryGirl.define do
  factory :user do
    name 'Test User'
    sequence(:email) { |n| "user#{n}@example.com" }
    password 'password'
    role 'customer'
  end
end

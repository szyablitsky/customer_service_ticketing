FactoryGirl.define do
  factory :user do
    name 'Test User'
    email 'user@example.com'
    password 'password'
    role 'customer'
  end
end

FactoryGirl.define do
  factory :request do
    user
    subject 'Subject'
    description 'Description'
    open true
  end
end

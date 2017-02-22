class Request < ApplicationRecord
  belongs_to :user
  belongs_to :support_agent, optional: true
end

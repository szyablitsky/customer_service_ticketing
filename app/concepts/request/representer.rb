class Request::Representer < BaseRepresenter
  property :id
  property :user_id
  property :support_agent_id
  property :title
  property :text
  property :open
  property :created_at, getter: ->(represented:, **) { represented.created_at.to_i }
  property :updated_at, getter: ->(represented:, **) { represented.updated_at.to_i }
end

class Comment::Representer < BaseRepresenter
  property :id
  property :request_id
  property :user_id
  property :content
  property :created_at, getter: ->(represented:, **) { represented.created_at.to_i * 1000 }
end

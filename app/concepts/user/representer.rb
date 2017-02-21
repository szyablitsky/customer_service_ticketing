class User::Representer < BaseRepresenter
  property :id
  property :name
  property :email
  property :role
  property :created_at, getter: ->(represented:, **) { represented.created_at.to_i }
  property :updated_at, getter: ->(represented:, **) { represented.updated_at.to_i }
end

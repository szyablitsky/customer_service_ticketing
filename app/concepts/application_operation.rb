require 'representable/json'

class ApplicationOperation < Trailblazer::Operation
  extend Representer::DSL
  include Representer::Rendering

  def process(*); end
end

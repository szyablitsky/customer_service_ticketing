class Session::Destroy < ApplicationOperation
  def model!(params)
    return unless params['current_user']
    params['current_user'].authentications.where(key: params['key']).first
  end

  def process(*)
    model.destroy if model.present?
  end
end

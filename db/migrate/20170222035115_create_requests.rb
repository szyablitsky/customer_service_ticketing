class CreateRequests < ActiveRecord::Migration[5.0]
  def change
    create_table :requests do |t|
      t.references :user, null: false, foreign_key: true
      t.references :support_agent, foreign_key: { to_table: :users }
      t.string :subject
      t.string :description
      t.boolean :open

      t.timestamps
    end
  end
end

class CreateAuthentications < ActiveRecord::Migration[5.0]
  def change
    create_table :authentications do |t|
      t.references :user, null: false, foreign_key: true
      t.string :key
      t.string :secret_digest
      t.string :browser
      t.string :operating_system
      t.timestamps
    end

    add_index :authentications, :key, unique: true
  end
end

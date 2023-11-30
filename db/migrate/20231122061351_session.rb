class Session < ActiveRecord::Migration[7.1]
  def change
    create_table :sessions do |t|
      t.string :session
      t.string :user_id
      t.string :horse_id
      t.timestamps
    end
  end
end

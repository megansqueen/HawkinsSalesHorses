class CreateOffers < ActiveRecord::Migration[7.1]
  def change
    create_table :offers do |t|
      t.string :buyer
      t.string :price
      t.integer :horse_id

      t.timestamps
    end
  end
end

class AddHorseIdToOffers < ActiveRecord::Migration[7.1]
  def change
    add_column :offers, :horse_id, :string
  end
end

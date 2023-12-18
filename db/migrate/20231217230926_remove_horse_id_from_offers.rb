class RemoveHorseIdFromOffers < ActiveRecord::Migration[7.1]
  def change
    remove_column :offers, :horse_id, :string
  end
end

class CreateHorses < ActiveRecord::Migration[7.1]
  def change
    create_table :horses do |t|
      t.string :name
      t.string :breed
      t.string :color
      t.string :skill
      t.integer :price

      t.timestamps
    end
  end
end

class ChangePriceToDecimalInHorses < ActiveRecord::Migration[7.1]
  def change
    remove_column :horses, :price, :integer
    add_column :horses, :price, :decimal, precision: 10, scale: 2, default: 0.0, null:false
  end
end

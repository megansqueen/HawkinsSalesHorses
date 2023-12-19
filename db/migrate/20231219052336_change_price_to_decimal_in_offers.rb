class ChangePriceToDecimalInOffers < ActiveRecord::Migration[7.1]
  def change
    def change
      remove_column :offers, :price, :integer
      add_column :offers, :price, :decimal, precision: 10, scale: 2, default: 0.0, null:false
    end
  end
end

class RemoveUserInUsers < ActiveRecord::Migration[7.1]
  def change
    def change
      remove_column :offers, :user, :string
    end
  end
end

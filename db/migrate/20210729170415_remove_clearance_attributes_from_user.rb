class RemoveClearanceAttributesFromUser < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :remember_token, :string
    remove_column :users, :confirmation_token, :string
  end
end

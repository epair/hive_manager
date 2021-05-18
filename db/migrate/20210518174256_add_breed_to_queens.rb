class AddBreedToQueens < ActiveRecord::Migration[6.1]
  def change
    add_column :queens, :breed, :integer
  end
end

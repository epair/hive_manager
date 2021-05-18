class RemoveStatusFromQueens < ActiveRecord::Migration[6.1]
  def change
    remove_column :queens, :status, :integer
  end
end

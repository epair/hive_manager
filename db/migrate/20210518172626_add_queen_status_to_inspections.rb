class AddQueenStatusToInspections < ActiveRecord::Migration[6.1]
  def change
    add_column :inspections, :queen_status, :integer
  end
end

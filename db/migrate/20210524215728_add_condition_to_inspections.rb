class AddConditionToInspections < ActiveRecord::Migration[6.1]
  def change
    add_column :inspections, :condition, :integer
  end
end

class AddFeederToInspections < ActiveRecord::Migration[6.1]
  def change
    add_column :inspections, :feeder, :boolean, null: false, default: false
  end
end

class AddDateToInspections < ActiveRecord::Migration[6.1]
  def change
    add_column :inspections, :date, :date
  end
end

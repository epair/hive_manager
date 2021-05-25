class AddNumberOfBoxesToInspections < ActiveRecord::Migration[6.1]
  def change
    add_column :inspections, :number_of_boxes, :integer, null: false, default: 0
  end
end

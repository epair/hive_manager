class AddNotesToInspections < ActiveRecord::Migration[6.1]
  def change
    add_column :inspections, :notes, :text
  end
end

class AddNumberOfFramesToInspections < ActiveRecord::Migration[6.1]
  def change
    add_column :inspections, :number_of_frames, :integer, null: false, default: 0
  end
end

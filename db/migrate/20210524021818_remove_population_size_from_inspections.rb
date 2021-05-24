class RemovePopulationSizeFromInspections < ActiveRecord::Migration[6.1]
  def change
    remove_column :inspections, :population_size, :integer
  end
end

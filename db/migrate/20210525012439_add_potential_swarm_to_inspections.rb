class AddPotentialSwarmToInspections < ActiveRecord::Migration[6.1]
  def change
    add_column :inspections, :potential_swarm, :boolean, null: false, default: false
  end
end

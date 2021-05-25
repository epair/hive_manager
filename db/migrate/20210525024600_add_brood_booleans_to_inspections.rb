class AddBroodBooleansToInspections < ActiveRecord::Migration[6.1]
  def change
    add_column :inspections, :egg_brood, :boolean, null: false, default: false
    add_column :inspections, :larvae_brood, :boolean, null: false, default: false
    add_column :inspections, :capped_brood, :boolean, null: false, default: false
  end
end

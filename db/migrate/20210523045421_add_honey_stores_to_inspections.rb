class AddHoneyStoresToInspections < ActiveRecord::Migration[6.1]
  def change
    add_column :inspections, :honey_stores, :integer
  end
end

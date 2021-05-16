class CreateInspections < ActiveRecord::Migration[6.1]
  def change
    create_table :inspections do |t|
      t.references :hive, null: false, foreign_key: true
      t.integer :population_size, null: false

      t.timestamps
    end
  end
end

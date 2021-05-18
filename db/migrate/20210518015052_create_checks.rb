class CreateChecks < ActiveRecord::Migration[6.1]
  def change
    create_table :checks do |t|
      t.references :queen, null: false, foreign_key: true
      t.date :date, null: false
      t.integer :status, null: false

      t.timestamps
    end
  end
end

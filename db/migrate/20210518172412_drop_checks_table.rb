class DropChecksTable < ActiveRecord::Migration[6.1]
  def up
    drop_table :checks
  end

  def down
    create_table :checks do |t|
      t.references :queen, null: false, foreign_key: true
      t.date :date, null: false
      t.integer :status, null: false

      t.timestamps
    end
  end
end

class CreateHiveQueens < ActiveRecord::Migration[6.1]
  def change
    create_table :hive_queens do |t|
      t.references :hive, null: false, foreign_key: true
      t.references :queen, null: false, foreign_key: true
      t.boolean :current, null: false

      t.timestamps
    end
  end
end

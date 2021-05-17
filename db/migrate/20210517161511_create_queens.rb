class CreateQueens < ActiveRecord::Migration[6.1]
  def change
    create_table :queens do |t|
      t.integer :status, null: false

      t.timestamps
    end
  end
end

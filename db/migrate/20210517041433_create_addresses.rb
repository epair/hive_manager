class CreateAddresses < ActiveRecord::Migration[6.1]
  def change
    create_table :addresses do |t|
      t.string :street
      t.string :street2
      t.string :city
      t.string :state
      t.string :zip_code
      t.references :addressable, polymorphic: true

      t.timestamps
    end
  end
end

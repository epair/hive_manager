class AddNullFalseToHive < ActiveRecord::Migration[6.1]
  def change
    change_column_null :hives, :name, false
  end
end

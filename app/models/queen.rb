class Queen < ApplicationRecord
  has_many :hive_queens
  has_many :hives, through: :hive_queens
  enum breed: [ :italian, :russian, :carniolan, :saskatraz, :home_grown ]
end

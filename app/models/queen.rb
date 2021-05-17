class Queen < ApplicationRecord
  has_many :hives, through: :hive_queens
end

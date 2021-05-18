class Queen < ApplicationRecord
  has_many :hives, through: :hive_queens
  has_many :checks
end

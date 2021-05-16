class Inspection < ApplicationRecord
  belongs_to :hive
  enum population_size: [ :critical, :small, :medium, :large ]

  validates :population_size, presence: true
end

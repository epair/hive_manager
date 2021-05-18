class Inspection < ApplicationRecord
  belongs_to :hive
  enum population_size: [ :critical, :small, :medium, :large ]
  enum queen_status: [ :right, :laying_workers, :virgin, :caged ]

  validates :population_size, presence: true
end

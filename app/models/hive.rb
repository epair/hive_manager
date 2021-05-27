class Hive < ApplicationRecord
  belongs_to :user
  has_many :inspections
  has_many :hive_queens
  has_many :queens, through: :hive_queens
  has_many :addresses, as: :addressable

  accepts_nested_attributes_for :addresses

  validates :name, presence: true

  delegate :queen_status,
           :honey_stores,
           :condition,
           :number_of_frames,
           :potential_swarm,
           :brood,
           :feeder,
           :number_of_boxes, to: :most_recent_inspection, allow_nil: true

  def current_address
    addresses.last
  end

  def one_line_address
    current_address.try(:one_line)
  end

  def most_recent_inspection
    inspections.first
  end
end

class Hive < ApplicationRecord
  belongs_to :user
  has_many :inspections
  has_many :addresses, as: :addressable
  accepts_nested_attributes_for :addresses

  validates :name, presence: true

  def population_size
    inspections.last.try(:population_size)
  end
end

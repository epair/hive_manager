class Hive < ApplicationRecord
  belongs_to :user
  has_many :inspections

  validates :name, presence: true
end

class Inspection < ApplicationRecord
  belongs_to :hive
  enum queen_status: [ :right, :laying_workers, :virgin, :caged ]
  enum honey_stores: [ :low, :moderate, :high ]
  enum condition: [ :healthy, :needs_attention ]

  default_scope { order(date: :desc) }

  def brood
    arr = []
    arr << "Eggs" if egg_brood
    arr << "Larvae" if larvae_brood
    arr << "Capped" if capped_brood
    arr
  end
end

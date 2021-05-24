class Inspection < ApplicationRecord
  belongs_to :hive
  enum queen_status: [ :right, :laying_workers, :virgin, :caged ]
  enum honey_stores: [ :low, :moderate, :high ]
end

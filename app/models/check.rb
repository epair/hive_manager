class Check < ApplicationRecord
  belongs_to :queen

  enum status: [ :right, :laying_workers, :virgin, :caged ]
end

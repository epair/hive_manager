class Inspection < ApplicationRecord
  belongs_to :hive
  enum queen_status: %i[right laying_workers virgin caged]
  enum honey_stores: %i[low moderate high]
  enum condition: %i[healthy needs_attention]

  default_scope { order(date: :desc) }

  def brood
    arr = []
    arr << 'Eggs' if egg_brood
    arr << 'Larvae' if larvae_brood
    arr << 'Capped' if capped_brood
    arr
  end
end

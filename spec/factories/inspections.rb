FactoryBot.define do
  factory :inspection do
    hive
    honey_stores { 1 }
    queen_status { 1 }
    condition { 1 }
    number_of_frames { 20 }
    number_of_boxes { 3 }
    potential_swarm { true }
    egg_brood { true }
    larvae_brood { true }
    feeder { true }
  end
end

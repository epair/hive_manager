FactoryBot.define do
  factory :address do
    sequence(:street) { |n| "#{n} Main Street" }
    sequence(:street2) { |n| "##{n}" }
    city { "Atlanta" }
    state { "GA" }
    zip_code { "30327" }
    association :addressable, factory: :hive
  end
end

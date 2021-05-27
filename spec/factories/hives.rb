FactoryBot.define do
  factory :hive do
    user
    sequence(:name) { |n| "Hive #{n}" }
  end
end

# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_07_29_202534) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "addresses", force: :cascade do |t|
    t.string "street"
    t.string "street2"
    t.string "city"
    t.string "state"
    t.string "zip_code"
    t.string "addressable_type"
    t.bigint "addressable_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["addressable_type", "addressable_id"], name: "index_addresses_on_addressable"
  end

  create_table "hive_queens", force: :cascade do |t|
    t.bigint "hive_id", null: false
    t.bigint "queen_id", null: false
    t.boolean "current", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["hive_id"], name: "index_hive_queens_on_hive_id"
    t.index ["queen_id"], name: "index_hive_queens_on_queen_id"
  end

  create_table "hives", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_hives_on_user_id"
  end

  create_table "inspections", force: :cascade do |t|
    t.bigint "hive_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.date "date"
    t.integer "queen_status"
    t.integer "honey_stores"
    t.integer "condition"
    t.integer "number_of_frames", default: 0, null: false
    t.boolean "potential_swarm", default: false, null: false
    t.boolean "egg_brood", default: false, null: false
    t.boolean "larvae_brood", default: false, null: false
    t.boolean "capped_brood", default: false, null: false
    t.boolean "feeder", default: false, null: false
    t.integer "number_of_boxes", default: 0, null: false
    t.text "notes"
    t.index ["hive_id"], name: "index_inspections_on_hive_id"
  end

  create_table "queens", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "breed"
  end

  create_table "users", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "email", null: false
    t.string "password_digest", limit: 128, null: false
    t.string "token"
    t.index ["email"], name: "index_users_on_email"
  end

  add_foreign_key "hive_queens", "hives"
  add_foreign_key "hive_queens", "queens"
  add_foreign_key "hives", "users"
  add_foreign_key "inspections", "hives"
end

class Address < ApplicationRecord
  belongs_to :addressable, polymorphic: true

  def line3
    "#{city}, #{state} #{zip_code}"
  end
end

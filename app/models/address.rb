class Address < ApplicationRecord
  belongs_to :addressable, polymorphic: true

  def one_line
    if street2.blank?
      "#{street} #{line3}"
    else
      "#{street} #{street2} #{line3}"
    end
  end

  def line3
    "#{city}, #{state} #{zip_code}"
  end
end

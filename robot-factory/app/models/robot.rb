class Robot < ApplicationRecord
  has_many :tasks, dependent: :destroy
  # destroy orphan tasks
end

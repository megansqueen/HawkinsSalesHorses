class Offer < ApplicationRecord
    belongs_to :horse
    belongs_to :user, optional: true
end

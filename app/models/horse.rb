class Horse < ApplicationRecord
    has_many :offers
    has_many :users, through: :offers
    validates :name, presence: true
    validates :image, presence: true
end

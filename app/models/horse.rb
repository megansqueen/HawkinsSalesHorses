class Horse < ApplicationRecord
    has_many :users, through: :offers
    has_many :offers
    validates :name, presence: true
    validates :image, presence: true
end

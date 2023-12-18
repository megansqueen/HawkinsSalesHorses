class User < ApplicationRecord
    has_many :offers
    has_many :horses, through: :offers
    validates :username, presence: true, uniqueness: true
    has_secure_password
end

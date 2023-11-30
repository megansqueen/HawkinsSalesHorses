class User < ApplicationRecord
    has_one :session
    has_secure_password
end

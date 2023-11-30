class UserSerializer < ActiveModel::Serializer
  attributes :user, :username, :password
end

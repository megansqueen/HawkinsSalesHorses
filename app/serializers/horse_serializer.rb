class HorseSerializer < ActiveModel::Serializer
    attributes :user_id, :name, :image, :breed, :color, :skill, :price
end

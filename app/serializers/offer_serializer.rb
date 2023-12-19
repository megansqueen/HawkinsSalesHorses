class OfferSerializer < ActiveModel::Serializer
  attributes :id, :buyer, :price, :horse_id, :user_id

end

class HorseSerializer < ActiveModel::Serializer
    attributes :user_id, :id, :name, :image, :breed, :color, :skill, :price, :offers

    def offers
        object.offers.map do |offer|
            {
                id: offer.id,
                buyer: offer.buyer,
                price: offer.price,
                user_id: offer.user_id,
                horse_id: offer.horse_id
            }
        end
    end

end

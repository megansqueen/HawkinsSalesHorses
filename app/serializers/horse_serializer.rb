class HorseSerializer < ActiveModel::Serializer
    attributes :user_id, :id, :name, :image, :breed, :color, :skill, :price, :offers

    def offers
        object.offers.map do |offer|
            {
                id: offer.id,
                buyer: offer.buyer,
                price: offer.price
            }
        end
    end

end

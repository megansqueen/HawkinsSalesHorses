class OffersController < ApplicationController
    before_action :require_login, only: :create

    def create
        offer = Offer.create!(offer_params)
            render json: offer , status: :created
    end

    private

    def offer_params
        params.require(:offer).permit(:buyer, :price, :horse_id, :user_id)
    end

    def logged_in
        
    end
    
    def require_login
        unless session[:user_id]
            redirect_to root_path, alert: "Please log in to create an offer."
        end
    end

end

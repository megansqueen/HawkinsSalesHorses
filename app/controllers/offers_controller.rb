class OffersController < ApplicationController
    before_action :require_login, only: :create
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def create
        offer = Offer.create!(offer_params)
            render json: offer , status: :created
    end

    def update
        if session[:user_id]
            offer = Offer.find_by(offer_params[:user_id])
                offer.update!(offer_params)
                render json: offer, status: :created
        end
    end

    private

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
      end

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

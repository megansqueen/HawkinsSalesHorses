class HorsesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def create
        horse = Horse.create!(horse_params)
            render json: horse, status: :created
    end

    def destroy
        horse = Horse.find_by(:user_id)
        horse.delete
    end

    private

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def horse_params
        params.permit(:name, :image, :breed, :color, :skill, :price)
    end

end

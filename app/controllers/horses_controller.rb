class HorsesController < ApplicationController
    # before_action :require_login, only: :index
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def create
        horse = Horse.create!(horse_params)
            render json: horse, status: :created
    end

    def index
        horses = Horse.includes(:offers).all
        render json: horses, each_serializer: HorseSerializer
    end

    def destroy
        horse = Horse.find(params[:id])
        horse.delete
        render json: horse
    end

    def update_image
        horse = Horse.find(params[:id])
        horse.update(horse_params)
        render json: horse
    end

    private

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def horse_params
        params.require(:horse).permit(:id, :user_id, :name, :image, :breed, :color, :skill, :price, :offers)
    end

end

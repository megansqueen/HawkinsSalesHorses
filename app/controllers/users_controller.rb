class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    def create
      user = User.create!(user_params)
          session[:user_id] = user.id
          render json: user, status: :created
  end

    def show
      if session[:user_id]
        user = User.find(session[:user_id])
          render json: {user_id: user.id, username: user.username} 
      else 
        render json: {error: "unauthorized"}, status: :unauthorized
      end
    end

      private

      def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
      end

      def user_params
        params.require(:user).permit(:id, :username, :password)
      end

  end

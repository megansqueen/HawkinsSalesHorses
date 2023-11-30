class UsersController < ApplicationController
    protect_from_forgery with: :null_session
    rescue_from ActionController::UnpermittedParameters, with: :render_unpermitted_params_response
    def index
        users = User.all
        render json: users
    end

    def create
        user = User.create!(user_params)
        # if user = User.find_by(username: params[:username])
        #   session[:user_id] = user.id
        #   render json: user
        # else
        #   user = User.create(name: params[:name], username: params[:username], password: params[:password])
        #   render json: user, status: :created
        # end
        render json: user, status: :created
      end

      private

      def render_unprocessable_entity(invalid)
        render json:{error: invalid.record.errors}, status: :render_unprocessable_entity
      end

      def user_params
        params.require(:user).permit(:username, :password)
      end

      def render_unpermitted_params_response
        render json: { "Unpermitted Parameters": params.to_unsafe_h.except(:controller, :action, :id, :username, :password).keys }, status: :unprocessable_entity
      end

  end

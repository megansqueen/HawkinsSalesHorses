class SessionController < ApplicationController
    protect_from_forgery with: :null_session
    skip_before_action :authorized, only: :create

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {error: {login: "Invalid user name or password"}}, status: :unauthenticated
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end
  end
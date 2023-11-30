class ApplicationController < ActionController::Base

include ActionController::Cookies
before_action :authorized
def authorized
    return render json:{error: "Not Authorized"}, status: :unauthorized 
    unless session.include? :user_id
end

private 

    def current_user
        @_current_user ||= session[:user_id] &&
            User.find_by(id: session[:user_id])
    end

end

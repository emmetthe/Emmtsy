# class StaticPagesController < ApplicationController
#   def root
#   end
# end

class StaticPagesController < ActionController::Base	
	def frontend
		render file: Rails.root.join('public', 'index.html')
	end
end

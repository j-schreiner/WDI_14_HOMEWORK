class HousesController < ApplicationController

  def index
    @houses = House.all
    @house = House.find_by(id: params[:id])

  end

  def show
    @houses = House.all

    @house = House.find_by(id: params[:id])
    @house_name = @house.name
  end

end

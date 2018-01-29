class DishesController < ApplicationController
  def new
  end

  def create
    dish = Dish.new
    dish.name = params[:name]
    if dish.save
      redirect_to '/dishes'
    else
      render :new
    end
  end

  def index
    @dishes = Dish.all
  end

  def show
    @dish = Dish.find_by(params[:id])
    if !@dish
      @message = "dish does not exist"
    else
      @dish_name = @dish.name
      @dish_image = @dish.image_url
    end
  end

  def destroy
    @dish =  Dish.find_by(params[:id])
    if @dish.destroy
      redirect_to '/dishes'
    else
    render :show
    end  
  end

end

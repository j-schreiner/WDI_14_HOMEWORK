class PokemonsController < ApplicationController

  def index
    @pokemons = Pokemon.all
    @pokemon = Pokemon.find_by(id: params[:id])
  end

  def new
  end

  def create
    pokemon = Pokemon.new
    pokemon.species = params[:species]
    pokemon.nickname = params[:nickname]
    pokemon.level = params[:level]
    if pokemon.save
      redirect_to '/pokemons'
    else
      render :new
    end
  end

  def show
    @pokemons = Pokemon.all
    @pokemon = Pokemon.find_by(id: params[:id])
  end

end

require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :index
end

get '/search' do
  #  if search input is empty.... re-load home page.....
  movie = params["title"]
  result = HTTParty.get("http://omdbapi.com/?s=#{movie}&apikey=2f6435d9")
  @result_list = result.parsed_response["Search"]
  erb :search
end


get '/movie' do
  movie = params["title"]
  result = HTTParty.get("http://omdbapi.com/?t=#{movie}&apikey=2f6435d9")
  @title = result.parsed_response["Title"]
  @year = result.parsed_response["Year"]
  @genre = result.parsed_response["Genre"]
  @poster = result.parsed_response["Poster"]
  @plot = result.parsed_response["Plot"]
  @actors = result.parsed_response["Actors"]
  erb :movie
end

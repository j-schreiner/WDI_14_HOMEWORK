require "sinatra"
require "sinatra/reloader"
require "stock_quote"

get '/data' do
  chosen_stock = params[:stock]
  stock_data = StockQuote::Stock.quote("#{chosen_stock}")
  @stock = stock_data
  erb :index
end

require "sinatra"
require "sinatra/reloader"
require "stock_quote"


get '/' do
  stock = StockQuote::Stock.json_quote(params["stock"])
  @name = stock["name"]
  @symbol = stock["symbol"]
  @exchange = stock["exchange"]
  @l = stock["l"]
  @op = stock["op"]
  @hi = stock["hi"]
  @lo = stock["lo"]
  @vo = stock["vo"]
  @c = stock["c"]
  @cp = stock["cp"]
  erb :index
end


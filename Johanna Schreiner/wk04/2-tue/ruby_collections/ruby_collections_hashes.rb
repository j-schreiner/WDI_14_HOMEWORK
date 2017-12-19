require 'pry'

# create hash

ninja_turtle = {
  name: "Michelangelo",
  weapon: "Nunchuks",
  radical: true
}
puts ninja_turtle

# add age key and value to hash

ninja_turtle[:age] = 17
puts ninja_turtle

# removing 'radical' key/value pair

ninja_turtle = ninja_turtle.delete('radical')
puts ninja_turtle

# add 'pizza toppings' key 

ninja_turtle[:pizza_toppings] = ["cheese", "pepperoni", "peppers"]
puts ninja_turtle

# access the first element of 'pizza toppings'

first_elem = ninja_turtle[:pizza_toppings[0]]
puts first_elem

# produce an array of ninja_turtle's keys, using a method

ninja_array = ninja_turtle.keys
puts ninja_array

# Print out each key-value pair -- "KEY's is equal to VALUE" -- using a method.




binding.pry

puts 'end program'
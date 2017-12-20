require 'pry'

# A

a = ["Anil", "Erik", "Jonathan"]
puts a[1]
a.push "Johanna" 
# or a << "Johanna"  (shuffle method)

# B

h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
puts h[1]
puts h[:two]
puts h["two"]
h[3] = "Three"
h[:four] = 4

# C

is = {true => "It's true!", false => "It's false"}
## "is true"
## "is false"
## "is false"
## nil
## nil

# D

users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

puts users["Jonathan"][:twitter]
puts users["Erik"][:favorite_numbers].push 7
# or users["Erik"][favorite_numbers]
puts users["Johanna"] = {}
# users["Johanna"] = {:favorite_numbers =>[9]}
puts users["Erik"][:favorite_numbers]

puts users["Erik"][:favorite_numbers][0]
# users["Erik"][:favorite_numbers].min


# users["Anil"][:favorite_numbers].each do |number|
#   if number % 2 == 0
#     puts number
#   end
# end

even_numbers = ["Anil"][:favorite_numbers].select do |number|
    number.even?
end
puts even_numbers.to_s
# print even_numbers

# users["Anil"][:favorite_numbers].select(&:even?)

# users_fav_nums = users["Jonathan"][:favorite_numbers] + users["Erik"][:favorite_numbers] + users["Anil"][:favorite_numbers]

users_fav_nums = users["Jonathan"][:favorite_numbers] & users["Erik"][:favorite_numbers] & users["Anil"][:favorite_numbers]


# puts new_fav_nums = users_fav_nums.uniq.sort.to_s

new_fav_nums = users["Jonathan"][:favorite_numbers].concat users["Erik"][:favorite_numbers].concat users["Anil"][:favorite_numbers]
puts new_fav_nums.sort.uniq


binding.pry

puts 'end of program'




require 'pry'


planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]

## accessing second value of planeteers

second_value = planeteers[1]
puts second_value

## adding 'Heart' to end of array

planeteers.push('Heart')
puts planeteers

## deleting "Captain Planet" without using a method



## combining planeteers with rangers to make 'heroes'

rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]

heroes = planeteers + rangers
puts heroes

## alphabetizing the values in  heroes

heroes = heroes.sort!
puts heroes

## randomise the order of content in heroes array

heroes = heroes.shuffle
puts heroes

## select a random element from heroes

heroes.sample(heroes.length)


binding.pry

puts 'end program'
require 'pry'

### ARRAYS

planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]

## accessing second value of planeteers

second_value = planeteers[1]
puts second_value

## adding 'Heart' to end of array

planeteers.push('Heart')
puts planeteers

## deleting "Captain Planet" without using a method

# need help with this, couldnt find the 'non-method method'...

## combining planeteers with rangers to make 'heroes'

rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]

heroes = planeteers + rangers
puts heroes

## alphabetizing the values in  heroes

alpha = heroes.sort!
puts alpha

## randomise the order of content in heroes array

shuffled = heroes.shuffle
puts shuffled

## BONUS
## select a random element from heroes

random = heroes.sample(heroes.length)
puts random

# select elements in heroes that begin with 'B', using a method.

b_heroes = heroes.select(start_with('B'))



binding.pry

puts 'end program'








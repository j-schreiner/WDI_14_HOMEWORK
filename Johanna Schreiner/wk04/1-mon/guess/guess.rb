
# # GUESS MY NUMBER

random_number = rand(10)+1

print "guess a number"
user_guess = gets.to_i

puts(user_guess)

while user_guess != random_number [do]
   puts("Guess again")
   user_guess = gets.to_i
end 

puts("Correct!")

# # GUESS MY NUMBER - EXTENSION

print "choose a maximum number"
max_number = gets.to_i

random_number = rand(max_number.to_i) + 1



puts(user_guess)

while user_guess != random_number [do]
  print "guess a number"
  user_guess = gets.to_i
  if user_guess < random_number [do]
    puts("Wrong, guess higher!")
  else
    puts("Wrong, guess lower!") 
  end
end 

puts("Correct!")


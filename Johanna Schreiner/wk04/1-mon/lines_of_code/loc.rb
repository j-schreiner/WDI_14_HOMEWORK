

print "please enter a file: "
text_file = gets.chomp
text_array = IO.readlines(text_file)
puts text_array.length


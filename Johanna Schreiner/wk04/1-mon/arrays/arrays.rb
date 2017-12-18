require 'pry'

# ARRAYS ONE

days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

sunday_first = days_of_the_week.pop

days_of_the_week.unshift(sunday_first)

# puts(days_of_the_week)


# ARRAYS TWO

days_of_the_week_2 = [["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], ["Saturday", "Sunday"]]

# ARRAYS THREE
days_of_the_week_2.shift

weekends = days_of_the_week_2

# puts(weekends)

# ARRAYS FOUR

puts(weekends.sort)

require 'pry'

def operate_calc()

  print "choose: phase one, phase two or phase three: "
  chosen_phase = gets.chomp

  if chosen_phase == "phase one"

    print "choose: addition, subtraction, multiplication or division: "
    operation = gets.chomp

    print "enter the first number: "
    num1 = gets.chomp.to_i

    print "enter the second number: "
    num2 = gets.chomp.to_i

    if operation == "addition" 
      addition_result = num1 + num2
      puts "#{num1} plus #{num2} = #{addition_result}"

    elsif operation == "subtraction" 
      subtraction_result = num1 - num2
      puts "#{num1} minus #{num2} = #{subtraction_result}"

    elsif operation == "multiplication" 
      multiplication_result = num1 * num2
      puts "#{num1} multiplied by #{num2} = #{multiplication_result}"

    elsif operation == "division" 
      division_result = num1 % num2
      puts "#{num1} divided by #{num2} = #{division_result}"

    end

  elsif chosen_phase == "phase two"

    print "choose: exponentiation or square root: "
    operation = gets.chomp

    if operation == "exponentiation"

      print "enter the first number: "
      num1 = gets.chomp.to_i

      print "enter the second number: "
      num2 = gets.chomp.to_i

      exponentiation_result = num1 ** num2
      puts "#{num1} to the power of #{num2} = #{exponentiation_result}"

    elsif operation == "square root" 

      print "enter the number: "
      
      num1 = gets.chomp.to_i
      square_root_result = Math.sqrt(num1)
      puts "the square root of #{num1} = #{square_root_result}"

    end

  elsif chosen_phase == "phase three"
    #code for phase three here
  end  

end  

operate_calc()

# binding.pry
puts 'end of program'


class Phone

  def initialize(num_input)
    @clean_num = num_input.gsub(/[()-.\s]/, "")
  end

  def number
    if @clean_num.length == 9
      @invalid_num = "0000000000"
    elsif @clean_num.length == 10
      @clean_num
    elsif @clean_num.length == 11 && @clean_num[0] == '1'
      @clean_num.slice(1,11)
    elsif @clean_num.length == 11
      @invalid_num = "0000000000"
    end
  end

  def area_code
    @clean_num.slice(0,3)
  end

  def to_s
    @clean_num.insert(0, '(').insert(4,') ').insert(9,'-') 
  end

end

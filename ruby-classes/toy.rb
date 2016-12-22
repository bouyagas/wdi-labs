class Toy
  attr_accessor :name, :color, :type, :smell

  def initialize(name, color, type, smell)
    @name = name
    @color = color
    @type = type
    @smell = smell
  end

  def play
    "My favorite toy as a child was a #{color}, #{type} named #{name}."
  end

  def wash
    if @smell
      puts "Time to wash #{@name}!"
    else
      "Keep playing with #{@name}!"
    end
  end

end

class Student

  attr_accessor :f_name, :l_name, :gender, :height, :shirt_color

  def initialize(f_name, l_name, gender, height, shirt_color)
    @f_name = f_name
    @l_name = l_name
    @gender = gender
    @height = height
    @shirt_color = shirt_color
  end

  def full_name
    "#{@f_name} #{l_name}"
  end

  def talk_about_me
    "Hi, I'm #{@f_name} and I am a #{height} #{gender}."
  end

end

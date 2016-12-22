class Insta
  attr_accessor :user_name, :location, :picture, :caption, :likes, :followers

  def initialize(user_name, location, picture, caption, likes, followers)
    @user_name = user_name
    @location = location
    @picture = picture
    @caption = caption
    @likes = likes
  end

  def popular
    if @likes > 50
      puts "Killer pic!"
    else
      puts "Unpost this shit."
    end
  end

  def describle
    puts "#{@user_name} took a picture of #{@picture} at #{@location} and got #{@likes} likes."
  end

  def followers_likes
    puts "#{@user_name} liked a picture by #{@followers}"
  end
end

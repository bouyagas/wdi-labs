# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# 10.times {
#   new_robot = Robot.new
#   new_robot.avatar = Faker::Avatar.image
#   new_robot.name = Faker::Internet.user_name
#   new_robot.skill = Faker::Superhero.power

#   # Worth mentioning about integer max number (+/-)2^31
#   new_robot.serial = Faker::Number.number(9)

#   if new_robot.save
#     puts "#{new_robot.name} was created"
#   end
# }

5.times {
  new_task = Task.new
  new_task.name = Faker::Company.buzzword
  new_task.description = Faker::Company.catch_phrase
  new_task.completed = false
  new_task.robot_id = 1

  if new_task.save
    puts "#{new_task.name} was created"
  end
}

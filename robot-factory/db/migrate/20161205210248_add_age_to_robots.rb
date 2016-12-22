class AddAgeToRobots < ActiveRecord::Migration[5.0]
  def change
    add_column :robots, :age, :integer
  end
end

class RemoveAgeFromRobots < ActiveRecord::Migration[5.0]
  def change
    remove_column :robots, :age, :integer
  end
end

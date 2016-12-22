class CreateRobots < ActiveRecord::Migration[5.0]
  def change
    create_table :robots do |t|
      t.string :name
      t.string :avatar
      t.integer :serial
      t.string :skill

      t.timestamps
    end
  end
end

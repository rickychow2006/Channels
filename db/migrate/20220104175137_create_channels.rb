class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :name, null: false 
      t.boolean :public, default: true
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false 
      t.text :description
      t.integer :admin_id 
      
      t.timestamps
    end
    add_index :channels, :name, unique: true
  end
end

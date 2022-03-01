class CreateDmessages < ActiveRecord::Migration[5.2]
  def change
    create_table :dmessages do |t|
      t.text :body, null: false
      t.integer :author_id, null: false 
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false 
      t.datetime :receiver_id
    
      t.timestamps
    end
    add_index :dmessages, :author_id
    add_index :dmessages, :body
    add_index :dmessages, :receiver_id
  end
end

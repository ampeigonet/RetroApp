class CreateRetros < ActiveRecord::Migration[5.2]
  def change
    create_table :retros do |t|

      t.timestamps
    end
  end
end

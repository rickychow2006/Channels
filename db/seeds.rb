# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Channel.destroy_all
ChannelUser.destroy_all
Cmessage.destroy_all
Dmessage.destroy_all

demo = User.create({username: "DemoUser", email: "demouser@gmail.com", password: "password"})
demo2 = User.create({username: "DemoUser2", email: "demouser2@gmail.com", password: "password"})

generalchannel = Channel.create(name: 'general', description: 'this is the general channel', admin_id: demo.id)
generalchannel = Channel.create(name: 'testing', description: 'this is the general channel', admin_id: demo2.id)

message1 = Cmessage.create(body:"Hi WeSlack is pretty cool!", author_id: demo.id, channel_id: generalchannel.id)
message2 = Cmessage.create(body:"Hi!", author_id: demo2.id, channel_id: generalchannel.id)

User.all.each do |user|
  Channel.all.each do |channel|
    if channel.public == true
      ChannelUser.create(channel_id: channel.id, user_id: user.id)
    end 
  end 
end 
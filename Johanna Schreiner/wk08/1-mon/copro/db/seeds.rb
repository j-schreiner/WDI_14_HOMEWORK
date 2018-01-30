Project.delete_all
User.delete_all

arr1 = ['pudding', 'mistyrose', 'cake', 'crabhands']
arr2 = ['puts', 'migrate', 'seed', 'gem']

user = User.new
user.email = 'js@ga.co'
user.password = 'pudding'
user.save

10.times do
  Project.create(title: "#{arr1.sample} #{arr2.sample}",
  user_id: user.id)
end


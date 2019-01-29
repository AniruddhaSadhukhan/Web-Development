var mongoose 	= require("mongoose");

mongoose.connect("mongodb://localhost/BlogDemo");


//POST --title, content
var postSchema = new mongoose.Schema({
	title	: String,
	content	: String
});

var Post = mongoose.model("Post", postSchema);


//USER --email, name
var userSchema = new mongoose.Schema({
	email	: String,
	name	: String,
	posts	: [postSchema]
});

var User = mongoose.model("User", userSchema);

//First comment out the 2nd part and run only 1st part
// Then comment out the 1st part and run only 2nd part


//	//1.Creating new user with embedded post
//	var newUser = new User({
//		email	: "hermione@hogwarts.edu",
//		name	: "Hremione Granger"
//	});

//	newUser.posts.push({
//		title	: "How to brew polyjuice potion",
//		content	: "Just kidding...go to potions class to learn it !!!"
//	})


//	newUser.save(function(err,user){
//		if(err)
//		{
//			console.log(err);
//		}
//		else
//		{
//			console.log(user);
//		}
//	})


// 2.Finding a user and adding a new post to the user
User.findOne({name: "Hremione Granger"},function(err,user){
	if(err)
	{
		console.log(err);
	}
	else
	{
		user.posts.push({
			title	: "3 things I really hate",
			content	: "Voldemort... Voldemort... Voldemort... !!!"
		})
		user.save(function(err,user){
			if(err)
			{
				console.log(err);
			}
			else
			{
				console.log(user);
			}
		})
	}
});









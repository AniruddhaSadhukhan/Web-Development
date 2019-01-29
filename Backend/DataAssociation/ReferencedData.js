var mongoose 	= require("mongoose");

mongoose.connect("mongodb://localhost/BlogDemo2");


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
	posts	: 	[
					{
						type : mongoose.Schema.Types.ObjectId,
						ref  : "Post"
					}
				]
});

var User = mongoose.model("User", userSchema);

//Uncomment only one of the 4 part and run seperately

//		// 1.Create User
//	User.create({
//		email	: "hermione@hogwarts.edu",
//		name	: "Hremione Granger"
//	},function(err,user){
//		if(err)
//		{
//			console.log(err);
//		}
//		else
//		{
//			console.log(user);
//		}
//	});


//		// 2.Add first referenced post to a user
//	Post.create({
//		title	: "How to brew polyjuice potion",
//		content	: "Just kidding...go to potions class to learn it !!!"
//	},function(err,post){
//		if(err)
//		{
//			console.log(err);
//		}
//		else
//		{
//			User.findOne({name: "Hremione Granger"},function(err,user){
//				if(err)
//				{
//					console.log(err);
//				}
//				else
//				{
//					user.posts.push(post);
//					user.save(function(err,user){
//						if(err)
//						{
//							console.log(err);
//						}
//						else
//						{
//							console.log(user);
//						}
//					})
//				}
//			});
//		}
//	});


//		// 3.Add second referenced post to a user
//	Post.create({
//		title	: "3 things I really hate",
//		content	: "Voldemort... Voldemort... Voldemort... !!!"
//	},function(err,post){
//		if(err)
//		{
//			console.log(err);
//		}
//		else
//		{
//			User.findOne({name: "Hremione Granger"},function(err,user){
//				if(err)
//				{
//					console.log(err);
//				}
//				else
//				{
//					user.posts.push(post);
//					user.save(function(err,user){
//						if(err)
//						{
//							console.log(err);
//						}
//						else
//						{
//							console.log(user);
//						}
//					})
//				}
//			});
//		}
//	});


//		// 4.Display all data of user with full view of referenced posts
User.findOne({name: "Hremione Granger"}).populate("posts").exec(function(err,user){
	if(err)
	{
		console.log(err);
	}
	else
	{
		console.log(user);
	}
});

var mongoose 				= require("mongoose"),
	passport 				= require("passport"),
	localStrategy 			= require("passport-local"),
	passportLocalMongoose 	= require("passport-local-mongoose"),
	bodyParser 				= require("body-parser"),
	User 					= require("./models/user"),
	express 				= require("express"),
	app						= express();
	
mongoose.connect("mongodb://localhost/auth_demo_app");
app.set("view engine","ejs");

app.use(require("express-session")({
	secret : "This is the secret string used to encode and decode the sessions",
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: true}));

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//===================
// ROUTES
//===================

app.get("/",function(req,res){
	res.render("home");
})

app.get("/secret",isLoggedIn,function(req,res){
	res.render("secret");
})

//	AUTH ROUTES

//show sign up form
app.get("/register",function(req,res){
	res.render("register");
})


//handling user sign up
app.post("/register",function(req,res){
	User.register(new User({username: req.body.username}),req.body.password,function(err,user){
		if(err)
		{
			console.log(err);
			res.render("register");
		}
		else
		{
			passport.authenticate("local")(req,res,function(){
				res.redirect("/secret");
			});
		}
	});
})


//show login form
app.get("/login",function(req,res){
	res.render("login");
})


//handling user login using middleware
app.post("/login",passport.authenticate("local",{
		successRedirect: "/secret",
		failureRedirect: "/login"
	}), function(req,res){
			
});

//log out
app.get("/logout",function(req,res){
	req.logout();
	res.redirect("/");
});

//===================
//	MIDDLEWARE
//===================
function isLoggedIn(req,res,next){
	if (req.isAuthenticated())
	{
		return next();
	}
	res.redirect("/login");
}

//===================
// Start server
//===================
app.listen(3000,function(){
	console.log("Server started...");
})

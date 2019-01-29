var express = require("express");
var app = express();
//var app = require("express")(); //in short
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));
app.set("view engine","ejs");


//Initial posts
var posts = [
		{title : "Post 1", author : "Ani"},
		{title : "Post 2", author : "Jack"},
		{title : "Post 3", author : "Jill"}
	];

//Routes
app.get("/",function(req,res){
	res.render("home");
});

app.get("/fallinlovewith/:thing",function(req,res){
	var thing = req.params.thing;
	res.render("love",{thingVar : thing});
});

//	post route
app.post("/addPost",function(req,res){
	var ptitle = req.body.ptitle;
	var pauthor = req.body.pauthor;
	posts.push({title : ptitle, author : pauthor});
	res.redirect("/posts");
});

app.get("/posts",function(req,res){
	res.render("posts",{posts : posts});
});


//Listen 
app.listen(3000,function(){
	console.log("Server Started");
});

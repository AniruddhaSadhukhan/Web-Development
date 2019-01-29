var express = require("express");
var app = express();

//Routes
app.get("/",function(req,res){
	res.send("Welcome to my first express website");
});

var speak = {"pig":"Oink","cow":"Moo","dog":"Woof Woof!"}
app.get("/speak/:animal",function(req,res){
	var animal = req.params.animal.toLowerCase();
	res.send("The "+animal+" says '"+speak[animal]+"'");
});

app.get("/repeat/:word/:num",function(req,res){
	var word = req.params.word;
	var n = Number(req.params.num);
	var str = "";
	for(var i = 0; i<n;i++)
		str += word + " ";
	res.send(str);
});

app.get("*",function(req,res){
	res.send("Sorry!!!Looks like you are lost...");
});

//Start listening on port 3000 of server
app.listen(3000,function(){
	console.log("Starting server and listening on port 3000");
})


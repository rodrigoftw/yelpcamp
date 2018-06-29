var express = require("express");
var app = express();
//var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res) {
	var campgrounds = [
		{name: "Salmon Creek", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104496f0c071a7e4b7b0_340.jpg"},
		{name: "Granite Hill", image: "https://pixabay.com/get/e83db50a21f4073ed1584d05fb1d4e97e07ee3d21cac104496f0c071a7e4b7b0_340.jpg"},
		{name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6105/6381606819_df560e1a51.jpg"}
	]
	res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(3000,
	function(){
	console.log("Initializing YelpCamp Server on port 3000.");
}), function() {
	console.log("Server YelpCamp initialized.");
};
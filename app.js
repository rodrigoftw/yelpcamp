var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
	{name: "Salmon Creek", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104496f0c071a7e4b7b0_340.jpg"},
	{name: "Granite Hill", image: "https://pixabay.com/get/e83db50a21f4073ed1584d05fb1d4e97e07ee3d21cac104496f0c071a7e4b7b0_340.jpg"},
	{name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6105/6381606819_df560e1a51.jpg"}
];

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res) {
	
	res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res) {
	//get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image}
	campgrounds.push(newCampground);
	//redirect back to campgrounds page
	res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
	res.render("new");
});

app.listen(3000,
	function(){
	console.log("Initializing YelpCamp Server on port 3000.");
}), function() {
	console.log("Server YelpCamp initialized.");
};
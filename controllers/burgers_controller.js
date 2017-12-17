var express = require("express");


var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", (req,res) => {
	burger.selectAll((data) => {
		var hbsObject = {
			burgers: data
		};
		res.render("index", hbsObject); //, hbsObject
	});
});

router.post("/", (req, res) => {
	console.log(req.body.burgerName);
	var singleString = [];
	singleString.push(req.body.burgerName);
	burger.insertOne("burger_name", singleString, () => {
		res.redirect("/");
	});
});

router.put("/:id", (req,res) => {
	var condition = "id =" + req.params.id;
	console.log("condition", condition);
	burger.updateOne({
		devoured: 1
	}, condition, () => {
		res.redirect("/");
	});
});

module.exports = router;
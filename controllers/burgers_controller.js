var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", (req,res) => {
	burger.selectAll((data)=>{
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/", (req, res) => {
	burger.insertOne("burger_name", req.body.burgerName, () => {
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
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
// by default this app should be assuming 
const port = process.env.PORT || 4001;


app.get("/hi", function(req,res){
  console.log("inside in my GET/ hi route");
  res.json("hi");
});

//this rest end point, should accept an object that holds 
// num1 and num2 as integers,
// and return the sun for those 2 numbers
/**
 * this is rest endpoint accepts a JSON object 
 * with num1 and num2 as keys
 * for 2 numbers,
 * This endpoint will return the sum of those 2 numbers
 * 
 * 
 */
// POST/ add 
// data: {
//   num1: 4,
//   num2: 12
// } resonse 16 

app.post("/add", function(req, res){
  console.log("inside my POST/num/route");
  console.log("request body:", req.body);
  let sum = req.body.num1 + req.body.num2
    res.json("the sum is " +sum);
})


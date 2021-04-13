const express = require ('express');
const router = express.Router();
const commentController = require('../controllers/comments'); // .. bc go outside of the routes 



//GET/ comments
//returns all the contact 
router.get("/comments", commentController.list)


// POST /comments
//DATA: json representation of the contact 
// adds a new contact to the contacts array 
router.post("/comments", commentController.create)

//GET/comments/:id 
// controller .show logic 
router.get("/comments/:id", commentController.show)


// read in the data 
// and assign an id to the contact 
// req.body._id = nextContactId;
// nextContactId ++; 

//increment the varible holding the next id
//so when we add the next contact, they dont get
// the same id 
// contacts.push(req.body);
  // res.json("success");



module.exports = router;
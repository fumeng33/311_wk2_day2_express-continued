const express = require ('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicles'); // .. bc go outside of the routes 



//GET/ vehicles
//returns all the vehicles 
router.get("/vehicles", vehicleController.list)


// POST /vehicles
//DATA: json representation of the contact 
// adds a new contact to the contacts array 
router.post("/vehicles", vehicleController.create)

//GET/vehicles/:id 
// controller .show logic 
router.get("/vehicles/:id", vehicleController.show)


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
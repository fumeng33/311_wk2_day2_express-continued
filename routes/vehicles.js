const express = require ('express');
const router = express.Router();
const contactController = require('../controllers/contacts'); // .. bc go outside of the routes 



//GET/ Contacts
//returns all the contact 
router.get("/contacts", contactController.list)


// POST /contacts
//DATA: json representation of the contact 
// adds a new contact to the contacts array 
router.post("/contacts", contactController.create)

//GET/contacts/:id 
// controller .show logic 
router.get("/contacts/:id", contactController.show)


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
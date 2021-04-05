const express = require ('express');
const router = express.Router();
const productController = require('../controllers/products.js'); // .. to go outside of the routes 



//GET/ products
//returns all the contact 
router.get("/products", productController.list)


// POST /products
//DATA: json representation of the contact 
// adds a new contact to the contacts array 
router.post("/products", productController.create)

//GET/products/:id 
// controller .show logic 
router.get("/products/:id", productController.show)


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
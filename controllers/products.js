const products = require("../data/products");

// loop through all the products,
//make a variable the hold the id of the next contact
// when we create it
let nextProdcutId = 1;
// contacts.forEach(function(contact){
//   if(nextContactId <= contacts._id){
//     nextContactId = contact._id+1;
//   }
// })
/**
 * For handling GET/ Products
 * @param {req} req : the request 
 * @param {res} res : the response object 
 */
let list = function (req, res) {
  console.log("inside the productsCtrl list()");
  res.json(products);
}
/**
 * 
 * @param {req} req 
 * @param {res} res 
 */
let create = function (req, res) {
  console.log("inside POST/products", req.body); //json.body pushing to the body
  // how do i add an id to this contact?? 
  // created keys and values object
  const newProduct =
  {
    _id: Math.floor(Math.random() * 100),
    name: req.body.name,
    occupation: req.body.price
  }

  // read in the data 
  // and assign an id to the product 
  req.body._id = nextProductId;
  nextProductId++;

  //increment the varible holding the next id
  //so when we add the next contact, they dont get
  // the same id 
  contacts.push(newProducts);
  res.json(products); // global varible is contacts 
}
/**
 * For handling GET/ Procuts/:id
 * @param {req} req : the request 
 * @param {res} res : the response object 
 */

const show = (req, res) => {
  // get contact by id
 // fill this in for assignment 
 // function to find what id are they looking for? 
  const found = products.some(product => product._id == req.params.id)
 // when we find this contact will filler it out to the create id and sent to the route 
  if (found){
      res.send(products.filter(product => product._id == req.params.id))
 // if not found it will give an error NOT FOUND
  } else {
      res.status(404).json({msg: `product ${req.params.id} not found.`})
  }
}

// export 3 functions so they can be available to the route module 
module.exports = { list, show, create }
const contacts = require("../data/comments");

// loop through all the contacts,
//make a variable the hold the id of the next contact
// when we create it
let nextCommentId = 1;
// contacts.forEach(function(contact){
//   if(nextContactId <= contacts._id){
//     nextContactId = contact._id+1;
//   }
// })
/**
 * For handling GET/ Contacts
 * @param {req} req : the request 
 * @param {res} res : the response object 
 */
let list = function (req, res) {
  console.log("inside the commentCtrl list()");
  res.json(comments);
}
/**
 * 
 * @param {req} req 
 * @param {res} res 
 */
let create = function (req, res) {
  console.log("inside POST/comment", req.body); //json.body pushing to the body
  // how do i add an id to this contact?? 
  // created keys and values object
  const newComment =
  {
    _id: Math.floor(Math.random() * 100),
    name: req.body.name,
    occupation: req.body.postID
  }
  // read in the data 
  // and assign an id to the contact 
  req.body._id = nextCommentId;
  nextCommentId++;

  //increment the varible holding the next id
  //so when we add the next contact, they dont get
  // the same id 
  contacts.push(newComment);
  res.json(comments); // global varible is contacts 
}
/**
 * For handling GET/ Contacts/:id
 * @param {req} req : the request 
 * @param {res} res : the response object 
 */

// let show = (req, res) => {
//   // get contact by id
//   // fill this in for assignment 
//   // function to find what id are they looking for? 
//   const found = contacts.some(contact => contact._id == req.params.id);
//   // when we find this contact will filler it out to the create id and sent to the route 
//   if (found) {
//     res.send(contacts.filter(contact => contact._id == req.params.id));
//     // if not found it will give an error NOT FOUND
//   } else {
//     res.status(404).json({msg: `User id ${req.params.id} Not Found`
//     })
//   }
// }

const show = (req, res) => {
  const found = comments.some(comment => comment._id == req.params.id)
  if (found){
      res.send(comments.filter(comment => comment._id == req.params.id))
  } else {
      res.status(404).json({msg: `comment ${req.params.id} not found.`})
  }
}

// export 3 functions so they can be available to the route module 
module.exports = { list, show, create }
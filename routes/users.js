const express = require("express");
const router = express.Router();

let user = {
    "20CE016" : "KRUTIK",
    "20CE001" : "BHARGAV",
    "20CE018" : "BHARGAVI",
    "20CE020" : "AKSH",
    "20CE015" : "AYUSH",
}

router.post("/", (req, res) => {
    
    let data = req.body
    user[data['User ID']] = data['User Name'] 
    console.log(user);  
    res.redirect('/users')
})


router.get("/", (req, res) => {
   
    res.render("users", {user})
});

module.exports = router;

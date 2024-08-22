const express = require('express')
const router = express.Router()

let admins = {
    "21CE030" : "RAHUL",
    "21CE045" : "PRIYA",
    "21CE012" : "SANJAY",
    "21CE009" : "ANJALI",
    "21CE050" : "VIKAS"
    }


//Router to the Admin page    
router.get('/', (req, res) => {
    
    res.render('admins', {admins})
})

//Router to the Admin Config page
router.get('/config', (req, res) => {
    res.send('Here you can config the admin page')
})


//Router to the Admin ID page
router.get('/:id', (req, res) => {
    const id = req.params.id
    res.send(`
    <h1>Hello Admin ${id}!</h1>   
        `)
})


//Router post cmd
router.post('/', (req, res) => {
    
    const formData = req.body;
    admins[formData['Admin ID']] = formData['Admin Name']
    console.log(admins);
    res.redirect('/admin')    
    })

module.exports = router;
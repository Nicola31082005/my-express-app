const express = require('express')
const port = 1234
const app = express()
const bodyParser = require('body-parser')
let counter = 0;

//Server config
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/views', express.static('views'));

//Middleware to set res.locals.counter
app.use((req, res, next) => {
  res.locals.counter = counter;
  next();
})


// Home page route
app.get("/", (req, res) => {
  counter++;  
  if (counter > 10) {
    res.redirect('/blocked')
  } else {
    res.render("index", {counter});    
  }
  });

// User page route
const userRouter = require("./routes/users")
app.use("/users", userRouter)

// Admin page route
const adminRouter = require("./routes/admins")
app.use("/admin", adminRouter)

// Blocked page route
const blockedRouter = require('./routes/blocked')
app.use("/blocked", blockedRouter)

// Start server cmd
app.listen(1234, () => {
    console.log(`Server is working on port: ${port}`);
    
})
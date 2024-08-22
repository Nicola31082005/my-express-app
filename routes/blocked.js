const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
const counter = res.locals.counter;
res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title> You are blocked! </title>
        <style> 
        body {
            background-color: aquamarine;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; 
        }
        </style>
        </head>
      <body>
    <h1>You have been blocked | Opened the page: ${counter} times </h1>

    <div class="tenor-gif-embed" data-postid="5790431685907878801" data-share-method="host" data-aspect-ratio="1" data-width="15%"><a href="https://tenor.com/view/monkey-sad-cry-gif-5790431685907878801">Monkey Sad Sticker</a>from <a href="https://tenor.com/search/monkey-stickers">Monkey Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>

    
      </body>
    </html>
`
) 
    
})

module.exports = router;
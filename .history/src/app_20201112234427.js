const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Welcome to Home..1');
});

app.listen(port, () =>{
    console.log(`Listing to the port at ${port}`);
})
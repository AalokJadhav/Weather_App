const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Welcome to Home..!');
});

app.get('/about', (req, res) => {
    res.send('Welcome to About Us Page..!');
});

app.get('*', (req, res) => {
    res.send('opps...404 error page..!');
});



app.listen(port, () =>{
    console.log(`Listing to the port at ${port}`);
})
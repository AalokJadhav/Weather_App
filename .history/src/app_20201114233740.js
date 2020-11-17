const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

// Public Static Path
console.log(path.join(__dirname, '..'));

// app.use(express.static());
app.get('/', (req, res) => {
    res.send('Welcome to Home..!');
});

app.get('/about', (req, res) => {
    res.send('Welcome to About Us Page..!');
});

app.get('/weather', (req, res) => {
    res.send('Welcome to Weather Page..!');
});

app.get('*', (req, res) => {
    res.send('opps...404 error page..!');
});



app.listen(port, () =>{
    console.log(`Listing to the port at ${port}`);
})
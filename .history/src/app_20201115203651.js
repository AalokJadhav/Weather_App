const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000;

// Public Static Path
const static_path = (path.join(__dirname, '../public'));

app.use('view engine', 'hbs')
app.use(express.static(static_path));

// Routing
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/weather', (req, res) => {
    res.render('weather');
});

app.get('*', (req, res) => {
    res.send('opps...404 error page..!');
});



app.listen(port, () =>{
    console.log(`Listing to the port at ${port}`);
})
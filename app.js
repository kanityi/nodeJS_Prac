/*jshint esversion: 9 */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

//app.use(bodyParser.urlencoded({extended:true})); -- for body parser
app.use(express.urlencoded({extended:true})); //4.16 >= body parser 

app.use('/admin', adminRoutes);
app.use(shopRoutes);



app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404page.html'));
});

app.listen(3000);
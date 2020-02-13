const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('First middleware');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('Second middleware');
//     res.send('<h1>Welcom to ExpressJS</h1>');
// });

app.use('/users',(req, res, next) =>{
    res.send('<h1>Users:</h1><body><ul><li>User 1</li><li>User 2</li></ul></body>');
});
app.use('/',(req, res, next) => {
    res.send('<h1>Welcome page of ExpressJs</h1>');
});
app.listen(3000);
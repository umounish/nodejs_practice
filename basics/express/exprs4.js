const express = require('express');
const browny = express();
const port = 3009;  


browny.get('/', (req, res) => {
    res.send('Hey, im browny, friend of bobby');
});


browny.get('/bobby', (req, res) => {
    res.send('I am also friend of browny');
    
})


browny.listen(3009);
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3003;  

app.use(bodyParser.urlencoded ({ extended: false}));
app.use(bodyParser.json);


app.get('/', (req, res) => {
    res.send('Hello I am using express framework');
});

app.get('/mobiles', (req, res) => {
    res.status(400).send('I am in mobiles section');
    
})

app.post('/calculator', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

app.put('/laptops', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})


app.patch('/laptops1', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})


app.delete('/laptops', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

app.listen(port, () => {
    console.log(`Server started on the port ${port}`);
}); 
 
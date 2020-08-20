const express = require('express')
const cors = require('cors')
const app = express()
const port = 3050
const curl = require('curl')
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
// app.get('/', function(req, res, next) {
//     console.log('hello you on page start')
// });

app.post('/login',function(req, res) {
    console.log(req.ResBody)
    curl.get('https://github.com/'+req, {}, function(err, response, body) {
    });
    res.sendStatus(200);
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
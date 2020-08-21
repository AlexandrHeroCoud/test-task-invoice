const express = require('express')
const cors = require('cors')
const app = express()
const port = 3050
const curl = require('curl')
app.use(cors());


app.post('/terminalsrowset',function(req, res) {
    console.log(req.body)

    res.sendStatus(200);
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
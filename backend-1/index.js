const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("<em> Hello Ashisha</em>");
})

// app.post('/', (req, res) => {
//     res.send("Updating Ashisha");
// })



app.listen(8000);
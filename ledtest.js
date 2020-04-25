const nugu = require('./config.json')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(express.json())

app.use(bodyParser.json())
app.use('/ledtest', (req, res) => {
    const Onled = nugu.action.parameters['LED'].value
    console.log(Onled)

    let output = nugu.output
    if (Onled == "조명"){
        output = { "prompt" : "조명 켜" }
    }

    nugu.output = output
    return res.json(nugu)
})

app.listen(3000, (err, result) => {
    console.log("누구 서버 시작 : ", 3000)
})
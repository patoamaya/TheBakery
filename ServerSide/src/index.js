const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose =  require('mongoose');
const IndexRouter = require('./routes/IndexRouter');
const OwnerRouter = require('./routes/OwnerRouter');
const {url} = require('./credentials/MongoDb')

const app = express()
mongoose.connect(url)
.then((db)=>{
    console.log("Connected to:" + db )
})
.catch((err)=>{
    console.log(err)
})

app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 2000;

app.listen(PORT, ()=>{
    console.log(`Listening on: http://localhost:${PORT}`)
})

app.use('/', IndexRouter)

app.use('/seller', OwnerRouter)
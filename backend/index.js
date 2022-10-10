const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 

// npm run dev for starting express server

connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

// Available Routes
app.get('/',(req,res)=>{
  res.send("<h2>Hello iNotebook Express Server<h2>")
})
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
  console.log(`NewsMonkey backend listening at http://localhost:${port}`)
  console.log('NewsMonkey frontend listening at http://localhost:3000')
  
})
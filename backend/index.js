const express = require("express");
const cors = require('cors');

const AuthRouter = require('./routes/AuthRouter')

require('./models/db')
const app = express();
app.use(cors())
app.use(express.json())
app.get('/ping', async (req, res) => {
    res.send("pong")
    
});

app.use('/api',AuthRouter)

app.listen(4000,()=>{
console.log("Your app is running port:4000")
})
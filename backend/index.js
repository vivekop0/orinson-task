const express = require("express");
const cors = require('cors');

const AuthRouter = require('./routes/AuthRouter')

require('./models/db')
const app = express();
const port = process.env.PORT || 4000;
app.use(cors())
app.use(express.json())
app.get('/ping', async (req, res) => {
    res.send("pong")
    
});

app.use('/api',AuthRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
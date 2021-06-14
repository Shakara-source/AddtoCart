const express = require('express');
const app = express();
const CRUDrouter = require("./routes")

// app.use(express.json)
app.use('/items', CRUDrouter)

app.listen(3005, function() {
    console.log(`Server starting on port 3005`);
  });
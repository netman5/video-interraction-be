const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
const PORT = '5000';

// auth route
app.use('/api/auth/login', (req, res) => {
  res.send({
    token: '1235856hxts'
  })
})

app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}/api/auth/login`));
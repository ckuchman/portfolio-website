const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/update_boardgames', (req, res) => {
  console.log('starting process')

  const spawn = require("child_process").spawn;
  const pythonProcess = spawn('python',["scripts/bggDataMine.py"]);

  pythonProcess.stdout.on('data', (data) => {
    console.log('Data: ' + data)
});
});

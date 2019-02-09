const express = require('express');

//initilizations
const app = express();

//settings
app.set('port',process.env.PORT || 3000);

//Server is listenning
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
})

//Routes
app.get('/', (req, res) => {
  res.send('Hello nico!');
});

app.get('/hello', (req, res) => {
    res.send('Hello hello!');
  });


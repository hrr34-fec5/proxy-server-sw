const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();

app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/listing/:listingId', (req, res) => {
  res.sendFile(path.join(__dirname,`../public/index.html`));
})

app.listen(port, () => {return console.log(`Proxy is listening on port ${port}`) });





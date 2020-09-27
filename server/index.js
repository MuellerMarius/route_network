const express = require('express');
const path = require('path');
const fs = require('fs');
const csv = require('csv-parser');

const app = express();
const publicPath = path.join(__dirname, '..', 'client', 'build');
const data = [];

//
// Data  ////////////////////////////////////////////////////////////
//

fs.createReadStream('server/database/airports.csv')
  .pipe(
    csv({
      separator: ';',
      raw: false,
    })
  )
  .on('data', function (row) {
    data.push(row);
  })
  .on('end', function () {
    console.log('Database loaded.');
  });

//
// Controller //////////////////////////////////////////////////////
//

const serveAirportData = (req, res) => {
  const requestedData = data.find((el) => el.ident === req.params.id);
  if (requestedData) {
    return res.status(200).json(requestedData);
  } else {
    return res.status(404).send(`${req.params.id} could not be found.`);
  }
};

const serveAutocompleteData = (req, res) => {
  const inputValue = req.params.id.toUpperCase();
  let requestedData = data
    .filter(
      (el) =>
        el.ident.length === 4 && // only display major airports
        (el.ident.toUpperCase().includes(inputValue) ||
          el.name.toUpperCase().includes(inputValue) ||
          el.iata.toUpperCase().includes(inputValue))
    )
    .map(({ ident, name }) => ({ ident, name }));

  if (requestedData.length > 10) {
    requestedData = requestedData.slice(0, 10);
  }
  return res.status(200).json(requestedData);
};

const serveClient = (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
};

//
// Routes //////////////////////////////////////////////////////////
//

app.use(express.static(publicPath));
app.get('/api/airport/:id', serveAirportData);
app.get('/api/ac/:id', serveAutocompleteData);
app.get('*', serveClient);

//
// Run /////////////////////////////////////////////////////////////
//

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);

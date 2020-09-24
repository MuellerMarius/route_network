const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');

const app = express();
const data = [];

//
// Data  ////////////////////////////////////////////////////////////
//

fs.createReadStream('server/database/db.csv')
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

const getAirportData = (req, res) => {
  const requestedData = data.find((el) => el.ident === req.params.id);
  if (requestedData) {
    return res.status(200).json(requestedData);
  } else {
    return res.status(404).send(`${req.params.id} could not be found.`);
  }
};

//
// Routes //////////////////////////////////////////////////////////
//

app.get('/api/:id', getAirportData);

//
// Run /////////////////////////////////////////////////////////////
//

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);

const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

let data = [];
fs.createReadStream(path.join(process.env.LAMBDA_TASK_ROOT, 'db.csv'))
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
    console.log('Database loaded');
  });

exports.handler = (event, context, callback) => {
  const airportCode = event.queryStringParameters.icao;
  return {
    statusCode: 200,
    body: data.find((el) => el.ident === airportCode),
  };
};

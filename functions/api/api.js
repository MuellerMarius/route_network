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

exports.handler = async (event, context, callback) => {
  const airportCode = event.queryStringParameters.icao;
  console.log(`querying ${airportCode}`);
  const answer = data.find((el) => el.ident === airportCode);
  console.log('answer');
  console.log(answer);
  return {
    statusCode: 200,
    body: JSON.stringify(answer),
  };
};

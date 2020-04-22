const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');

let data = [];
fs.createReadStream(
  path.resolve(process.env.LAMBDA_TASK_ROOT, 'database/db.csv')
) //'api/database/db.csv')
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

exports.getAirportData = (req, res, next) => {
  return res.status(200).json({ test: 'successful' });
  //data.find((el) => el.ident === req.params.id));
};

const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');

exports.getAirportData = (req, res, next) => {
  let data = [];

  // local path
  const dbPathLocal = path.join(
    process.env.LAMBDA_TASK_ROOT,
    'database',
    'db.csv'
  );

  // netlify path
  const dbPath = path.join(
    process.env.LAMBDA_TASK_ROOT,
    'src',
    'functions',
    'server',
    'database',
    'db.csv'
  );

  fs.createReadStream(dbPath)
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
      const requestedData = data.find((el) => el.ident === req.params.id);
      if (requestedData) {
        return res.status(200).json(requestedData);
      } else {
        return res.status(404).send(`${req.params.id} could not be found.`);
      }
    });
};

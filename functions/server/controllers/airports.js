const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');

const logdir = (dir) => {
  fs.readdir(dir, function (err, files) {
    //handling error
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    console.log(`LOGGING DIR: ${dir}`);
    files.forEach(function (file) {
      // Do whatever you want to do with the file
      console.log(file);
    });
  });
};

exports.getAirportData = (req, res, next) => {
  let data = [];

  logdir(path.join(process.env.LAMBDA_TASK_ROOT, 'src'));

  logdir(path.join(process.env.LAMBDA_TASK_ROOT));

  return res.status(200).json('{"test": "gut"}');

  // fs.createReadStream(
  //   path.join(process.env.LAMBDA_TASK_ROOT, 'database', 'db.csv')
  // )
  //   .pipe(
  //     csv({
  //       separator: ';',
  //       raw: false,
  //     })
  //   )
  //   .on('data', function (row) {
  //     data.push(row);
  //   })
  //   .on('end', function () {
  //     const requestedData = data.find((el) => el.ident === req.params.id);
  //     if (requestedData) {
  //       return res.status(200).json(requestedData);
  //     } else {
  //       return res.status(404).send(`${req.params.id} could not be found.`);
  //     }
  //   });
};

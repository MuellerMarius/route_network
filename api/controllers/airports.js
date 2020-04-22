const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');

let data = [];
// fs.createReadStream(path.join(process.env.LAMBDA_TASK_ROOT, 'db.csv'))
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
//     console.log('Database loaded');
//   });

exports.getAirportData = (req, res, next) => {
  fs.readdir(path.join(process.env.LAMBDA_TASK_ROOT, '.'), (err, files) => {
    console.log('lambda root');
    //handling error
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    console.log(files);
  });

  fs.readdir(
    path.join(process.env.LAMBDA_TASK_ROOT, '../db/'),
    (err, files) => {
      console.log('db');
      //handling error
      if (err) {
        return console.log('Unable to scan directory: ' + err);
      }
      //listing all files using forEach
      console.log(files);
    }
  );

  return res.status(200).json({
    dirname: __dirname,
    process: process.cwd(),
  });
  //data.find((el) => el.ident === req.params.id));
};

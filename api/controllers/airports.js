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

function readFiles(pathName) {
  var fileNames = '';
  fs.readdir(pathName, (err, files) => {
    //handling error
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    files.forEach((file) => (fileNames = fileNames.concat(file)));
  });
  console.log(fileNames);
  return fileNames;
}

exports.getAirportData = (req, res, next) => {
  console.log('current');
  fs.readdir(path.join(__dirname, '.'), (err, files) => {
    //handling error
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    console.log(files);
  });
  console.log('parent');
  fs.readdir(path.join(__dirname, '../'), (err, files) => {
    //handling error
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    console.log(files);
  });
  console.log('lambda root');
  fs.readdir(path.join(process.env.LAMBDA_TASK_ROOT, '.'), (err, files) => {
    //handling error
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    console.log(files);
  });
  console.log('lambda root parent');
  fs.readdir(path.join(process.env.LAMBDA_TASK_ROOT, '../'), (err, files) => {
    //handling error
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    console.log(files);
  });

  return res.status(200).json({
    dirname: __dirname,
    process: process.cwd(),
  });
  //data.find((el) => el.ident === req.params.id));
};

const fs = require('fs');
const path = require('path');

exports.handler = () => {
  fs.readdir(path.join(process.env.LAMBDA_TASK_ROOT, '.'), (err, files) => {
    console.log('root');
    //handling error
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    console.log(files);
  });

  return {
    statusCode: 200,
    body: { title: 'api' },
  };
};

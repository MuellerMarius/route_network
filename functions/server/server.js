const express = require('express');
const serverless = require('serverless-http');
// const dotenv = require('dotenv');
const airports = require('./routes/airports');

// dotenv.config({ path: './config/config.env' });
// const PORT = process.env.PORT || 5000;
const app = express();

// if (process.env.NODE_ENV === 'development') {
//   app.use(express.static('../client/build'));
//   app.use('/api', airports);
//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'))
//   );

//   app.listen(
//     PORT,
//     console.log(
//       `Server running on port ${PORT} in mode ${process.env.NODE_ENV}`
//     )
//   );
// } else if (process.env.NODE_ENV === 'production') {

app.use('/.netlify/functions/server/api', airports);
module.exports = app;
module.exports.handler = serverless(app);
// }

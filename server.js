const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// import routes
const groupRoute = require('./routes/Group');
const studentRoute = require('./routes/Student');
const SubmissionRoute = require('./routes/Admin_st');
const adminRoute = require('./routes/uprofile');
const uploads = require('./middleware/upload');
const fileUpload = require('./routes/fileUpload')

// App
const app = express();

// Database
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connected'))
  .catch((err) => console.log(err));

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

//Route
// app.get('*', (req, res) => {
//     res.json({
//         data: 'You reached nodejs api for react node crud app now'
//     });
// });

// Route Middleware
app.use('/group', groupRoute);
app.use('/student', studentRoute);
app.use('/admin', SubmissionRoute);
app.use('/admin', adminRoute);
app.use('/uploads', express.static('uploads'))
app.use('/admin',fileUpload);

// Post
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

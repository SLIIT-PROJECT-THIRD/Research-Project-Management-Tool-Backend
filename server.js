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

//Default Route
app.get('*', (req, res) => {
    res.send("<br><br><center><h1>Research management Tool - SLIIT- 2022</h1><h3>LIVE<h3></center>");
});

// Route Middleware
app.use('/group', groupRoute);
app.use('/student', studentRoute);
app.use('/admin', SubmissionRoute);
app.use('/admin', adminRoute);

// Post
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

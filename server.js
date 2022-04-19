const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// import routes
// const sampleRoute = require('./routes/post');

// App
const app = express();

// Database
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log(err));

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

//Route
app.get('*', (req, res) => {
    res.json({
        data: 'You reached nodejs api for react node crud app now'
    });
});

// Route Middleware
// app.use('/api', postRoutes);

// Post
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');
const passportJwt = require('./middleware/passportJWT')();
const errorHandler = require('./middleware/errorHandler');
const authRoute = require('./routes/auth');
const medicineRoute = require('./routes/medicineRoute');

const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env file


const app = express();
mongoose.set("strictQuery", false);

// Use environment variables in your application
const MONGO_URL = process.env.mongoURL;
mongoose.connect(MONGO_URL);

app.use(cors())
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passportJwt.initialize());
app.use('/api/auth', authRoute);
app.use('/api/medi',  medicineRoute);
// app.use('/api/medi', passportJwt.authenticate(), medicineRoute);

//ErrorHandler
app.use(errorHandler);


app.listen(config.port, () => console.log(`Listing...`));
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

const app = express();
mongoose.connect(config.mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passportJwt.initialize());
app.use('/api/auth', authRoute);
app.use('/api/medicine', medicineRoute);
app.use(errorHandler);


app.listen(config.port, () => console.log(`Listing...`));
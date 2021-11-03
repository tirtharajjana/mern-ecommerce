const express = require('express');
const env = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//routes
const userRoutes = require('./routes/user')

const app = express();
env.config();
// mongodb connection
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected');
}).catch(err => {
    console.log(`Database error ${err}`);
});

app.use(bodyParser.json());
app.use('/api', userRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
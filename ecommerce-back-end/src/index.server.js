const express = require('express');
const env = require('dotenv');
const mongoose = require('mongoose');

//routes
const authRoutes = require('./routes/auth')
const categoryRoutes = require('./routes/category')
const adminRoutes = require('./routes/admin/auth')
const productRoutes = require('./routes/product')


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
app.use(express.json());
app.use('/api', authRoutes)
app.use('/api', adminRoutes)
app.use('/api', categoryRoutes)
app.use('/api', productRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
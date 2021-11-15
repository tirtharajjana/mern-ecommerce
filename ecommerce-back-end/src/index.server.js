const express = require('express');
const env = require('dotenv');
const mongoose = require('mongoose');
const path = require('path')
const cors = require('cors');

//routes
const authRoutes = require('./routes/auth')
const categoryRoutes = require('./routes/category')
const adminRoutes = require('./routes/admin/auth')
const productRoutes = require('./routes/product')
const cartRoutes = require('./routes/cart');
const initialDataRoutes = require('./routes/admin/initialData')


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

app.use(cors())
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'uploads')))
app.use('/api', authRoutes)
app.use('/api', adminRoutes)
app.use('/api', categoryRoutes)
app.use('/api', productRoutes)
app.use('/api', cartRoutes)
app.use('/api', initialDataRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})
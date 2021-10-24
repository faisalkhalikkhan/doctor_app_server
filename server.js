const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const cloudinary = require('cloudinary');

const port = process.env.PORT || 5000;
const app = express();

app.use(cors())
app.use(express.json({ limit: "50mb", extended: true }))
app.use(express.urlencoded({ limit: "50mb", extended: true }))
const CONNECTION_URL = 'Enter your connection URL'

cloudinary.config({
    cloud_name: 'ddjlbktoe',
    api_key: '945859198772555',
    api_secret: 'a-0CiJ55mSDVo9XnbovDvqtqzro'
});

const adminRoutes = require('./admin/route')
app.use('/admin', adminRoutes);

const doctorRoutes = require('./doctor/route')
app.use('/doctors', doctorRoutes)


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port, () => console.log(`server is on port ${port}`)))
    .catch((error) => console.log(error.message))



require('dotenv').config()
const pass = process.env.MONGO_PASSWORD
const mongoose = require('mongoose');
const dbURL = `mongodb+srv://shameem8ods:${pass}@amer.qwhcs6h.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(dbURL, { dbName: 'amer' }, (err) => {
    if (!err) {
        console.log('Connected to database');
    } else {
        console.log(err);
    }
});

const surveyShema = new mongoose.Schema({
    name : String,
    mobile: Number,
    counterStaffRating: Number,
    visitAgainRating: Number,
    overollSatisfaction: String,
    additionalComment: String,
});
module.exports = mongoose.model("survey", surveyShema);
require('dotenv').config()
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const survey = require('./mongo')
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () => {
    console.log('Server listening on ' + PORT);
});

app.post('/',(req,res)=>{
    if(req.body.key == process.env.KEY){
    survey.find({}, function (err, result) {
        res.send(result);
    });
    } else {
        res.status(404).json({
            message: 'Acces denied',
        });
    }
    
    
})


app.post('/', (req, res) => {
    if(req.body.key == process.env.KEY){
        var surveyAdd = new survey({
            name : req.body.name,
            mobile: req.body.mobile,
            counterStaffRating: req.body.staff,
            visitAgainRating: req.body.visitAgain,
            overollSatisfaction: req.body.overall,
            additionalComment: req.body.comment,
            });
            surveyAdd.save((err, survey) => {
                if (err) {
                    res.status(500).json({
                        err
                    });
                } else {
                    res.status(200).json({
                        message: 'new survey created',
                        survey
                    });
                }
            });
    } else {
        res.status(404).json({
            message: 'Access denied',
        });
    }
    
    });
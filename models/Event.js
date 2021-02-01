const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    title:{
        type: String,
        required : true
    },
    link:{
        type:String,
        required : true
    },
    description:{
        type: String,
        required : true
    },
    startdate:{
        type: String,
        required : true
    },
    enddate:{
        type: String,
        required : true
    },
})


module.exports = mongoose.model('Event' , EventSchema );
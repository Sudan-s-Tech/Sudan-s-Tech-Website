const mongoose = require('mongoose');

const TrainingSchema = mongoose.Schema({
    title:{
        type: String,
        required : true
    },
    body:{
        type:String,
        required : true
    },
    imageurl:{
        type:String,
        required : true
    },
    formurl:{
        type:String,
        required : true
    },
    lesson:{
        type:Number,
        required : true
    },
    level:{
        type:String,
        required : true
    },
    duration:{
        type:String,
        required : true
    },
    description:{
        type: String,
        required : true
    },
    body:{
        type: String,
        required : true
    },
    about:{
        type: String,
        required : true
    },
})


module.exports = mongoose.model('Training' , TrainingSchema );
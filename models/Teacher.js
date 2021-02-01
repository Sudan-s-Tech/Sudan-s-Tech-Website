const mongoose = require('mongoose');

const TeacherSchema = mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    bio:{
        type:String,
        required : true
    },
    twitter:{
        type: String,
        required : true
    },
    likedin:{
        type: String,
        required : true
    },
    imgurl:{
        type: String,
        required : true
    },
})


module.exports = mongoose.model('Teacher' , TeacherSchema );
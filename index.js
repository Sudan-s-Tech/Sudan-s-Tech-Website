const express = require('express');
const app = express();
const Event = require('./models/Event');
const Training = require('./models/Training')
const Teacher = require('./models/Teacher')
const mongoose = require('mongoose');
const bodyparser = require('body-parser')
mongoose.connect('mongodb+srv://henlo:henlo@123@cluster0.7ezhd.mongodb.net/test',
{ useNewUrlParser: true },
{ useUnifiedTopology: true }
).then(()=>{
    console.log('connected to the database!')
})

app.use(bodyparser.json());

// EVENT ROUTES
app.get('/events' , async (req,res)=>{
    const Events = await Event.find().exec();

    res.json(Events);
})

app.post('/events/create' , async(req,res)=>{
    const {title , link , description , startdate , enddate} = req.body;
    try{
         const CreateEvent = await new Event({
        title,
        link,
        description,
        startdate,
        enddate
    })

    const CreatedEvent = await CreateEvent.save();
    res.json(CreatedEvent);
    }catch(err){
        console.log(err)
    }
} )

app.delete('/events/remove' , async(req,res)=>{
    const {title } = req.body;
    let DeleteEvent;
    try{
         DeleteEvent = await Event.findOne({
            title,
        })
    }catch(err){
        console.log(err)
    }

    try{
        await DeleteEvent.remove();
        res.send('event deleted')
    }catch(err){
        console.log(err)
    }
})

app.put('/event/change' , async(req,res)=>{
    const {oldtitle , title , link , description , startdate , enddate} = req.body;

    const FindEvent = await Event.findOne({
        title: oldtitle
    })
    FindEvent.title = title,
    FindEvent.link= link,
    FindEvent.description= description,
    FindEvent.startdate= startdate,
    FindEvent.enddate= enddate

    await FindEvent.save();
 res.json(FindEvent);
})

// TRAINING ROUTES

app.get('/trainings' , async (req,res)=>{
    const Trainings = await Training.find().exec();

    res.json(Trainings);
})

app.post('/trainings/create' , async(req,res)=>{
    const { title ,
            body ,
            imageurl , 
            formurl ,
            description,
            lesson,
            level,
            duration,
            about,
        } = req.body;
    try{
         const CreateTraining = await new Training({
            title ,
            body ,
            imageurl , 
            formurl ,
            description,
            lesson,
            level,
            duration,
            about,
    })

    const CreatedTraining = await CreateTraining.save();
    res.json(CreatedTraining);
    }catch(err){
        console.log(err)
    }
} )

app.delete('/trainings/remove' , async(req,res)=>{
    const {title} = req.body;
    let DeleteTraining;
    try{
        DeleteTraining = await Training.findOne({
            title,
        })
    }catch(err){
        console.log(err)
    }

    try{
        await DeleteTraining.remove();
        res.send('Training deleted')
    }catch(err){
        console.log(err)
    }
})

app.put('/training/change' , async(req,res)=>{
    const { 
            oldtitle , 
            title , 
            body ,
            imageurl , 
            formurl ,
            description,
            lesson,
            level,
            duration,
            about, 
    } = req.body;

    const FindTraining = await Training.findOne({
        title: oldtitle
    })
    FindTraining.title = title,
    FindTraining.body= body,
    FindTraining.description= description,
    FindTraining.imageurl= imageurl,
    FindTraining.lesson= lesson,
    FindTraining.level= level,
    FindTraining.duration= duration,
    FindTraining.about= about,
    FindTraining.formurl= formurl

    await FindTraining.save();
 res.json(FindTraining);
})

//TEACHER ROUTES
// app.get('/events' , async (req,res)=>{
//     const Events = await Event.find().exec();

//     res.json(Events);
// })

app.post('/teacher/create' , async(req,res)=>{
    const {name , bio , imgurl , twitter , linkedin ,course} = req.body;
    try{
         const CreateTeacher = await new Teacher({
        name,
        bio,
        imgurl,
        twitter,
        linkedin,
        course
    })

    const CreatedTeacher = await CreateTeacher.save();
    res.json(CreatedTeacher);
    }catch(err){
        console.log(err)
    }
} )

app.delete('/teacher/remove' , async(req,res)=>{
    const {name , course} = req.body;
    let DeleteTeacher;
    try{
        DeleteTeacher = await Teacher.findOne({
            name,
            // course
        })
    }catch(err){
        console.log(err)
    }

    try{
        await DeleteTeacher.remove();
        res.send('Teacher deleted')
    }catch(err){
        console.log(err)
    }
})

app.put('/Teacher/change' , async(req,res)=>{
    const {name , bio , imgurl , twitter , linkedin ,course}  = req.body;

    const FindTeacher = await Teacher.findOne({
        name,
    })
    FindEvent.bio = bio,
    FindEvent.imgurl= imgurl,
    FindEvent.twitter= twitter,
    FindEvent.linkedin= linkedin,
    // FindEvent.course= course

    await FindEvent.save();
 res.json(FindEvent);
})

app.listen(5000,()=>{
    console.log('connected to port 5000')
})







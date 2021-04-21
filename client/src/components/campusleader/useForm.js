import {useState } from 'react'
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key9vZntNeQ60A0N5'}).base('appI2ac5ZJnnlNUJb');

const useForm = (validate) => {
    const[values, setValues] = useState({
        name:'',
        email:'',
        phone:'',
        college:'',
        course:'',
        linkedin:''
    })
    const[errors, setErrors] = useState({})

const handleChange = (e)=>{
    setValues({
        ...values,
        [e.target.name]:e.target.value
    })
}
const submit =(e) =>{
e.preventDefault();
// console.log("arrived")

if(errors ===""){
        setErrors(validate(values))
    }else{
        // console.log("arrived2")
        base('Table 1').create([
            {
              "fields": {
                "Name":values.name,
                "Email":values.email,
                "CollegeName":values.college,
                "LinkedinUrl":values.linkedin,
                "PhoneNo":values.phone,
                "Course_Year":values.course
              }
            }
          ], function( records) {
            // if (err) {
            //   console.error(err);
            //   return;
            // }
            records.forEach(function (record) {
              console.log(record.getId());
            });
          });
    }
}

return{handleChange , values, submit , errors}
}

export default useForm;
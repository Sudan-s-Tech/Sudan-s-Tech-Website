export default function validator(values){
    let errors={}
    if(!values.name.trim()){
        errors.name = 'name required'
    }
    if(!values.email.trim()){
        errors.email = 'Email required'
    }else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
      }
      if(!values.phone.trim()){
        errors.phone = 'Number required'}
     else if(values.phone.length < 10){
          errors.phone = 'Phone no is incorrect'
      }else if(!typeof values.phone === Number){
          errors.phone = 'Phone no is incorrect'
      }
      if(!values.college.trim()){
          errors.college='college name required'
      }
      if(!values.course.trim()){
          errors.course='course field required'
      }
      if(!values.linkedin.trim()){
          errors.linkedin='linkedin required'
      }
     
  return errors;
}
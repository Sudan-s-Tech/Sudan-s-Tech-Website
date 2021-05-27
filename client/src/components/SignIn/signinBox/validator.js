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
      if(!values.password.trim()){
          errors.password='password required'
      }else if(values.password.length < 8){
          errors.password = 'Password must be of 8 character'
      }
  return errors;
}
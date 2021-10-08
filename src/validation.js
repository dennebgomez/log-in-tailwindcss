export default function validation (values){
    let errors = {}

    //username validation
    if (!values.username.trim())
    {
        errors.username = 'Username Required';
    }

    if (!values.email) {
        errors.email = "Email required";
    }
    else if (!/\S+@\S+\.\S+/.test(values.email)) 
    {
         errors.email = 'Email address is invalid';
    }

    if (!values.password) {
        errors.password = "Password is required";
    }
    else if (values.password.length < 6) 
    {
        errors.password = "Password is short";
    }

    if(!values.confirm_password)
    {
        errors.confirm_password = "Password Required";
    }
    else if(values.password !== values.confirm_password)
    {
        errors.confirm_password = "Password did not match!";
    }
    return errors;
}
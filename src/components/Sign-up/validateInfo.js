export default function validateInfo(values) {
    let errors = {}

    if(!values.username.trim()) {
        errors.username = "Username is required";
    }

    if(!values.password) {
        errors.password = "Password is required"
    }else if (values.password.length < 6) {
        errors.password = "Password must be than 6 characters"
    }

    if(!values.password2) {
        errors.password2 = "Password is required"
    }else if (values.password2==values.password) {
        errors.password2 = "Password do not match!"
    }

    return errors;
        
}
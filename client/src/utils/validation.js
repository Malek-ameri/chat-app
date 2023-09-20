export const validation = (data, type) => {

    const errors = {}
    if (data.username.length < 3) {
        errors.username = "Username must be 3 character"
    } else if (!data.username.trim()) {
        errors.username = "Username  required"
    } else {
        delete errors.username;
    }
    
    if (!data.password.trim()) {
        errors.password = "password  required";
    } else if (!data.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) && type === "register") {
        errors.password = "password need to be 6 character and number or more";
    } else {
        delete errors.password;
    }


    if (type === "register") {
        if (!data.email.trim()) {
            errors.email = "Email  required";
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = "Email address  invalid";
        } else {
            delete errors.email;
        }

        
        if (!data.confirmPassword.trim()) {
            errors.confirmPassword = "Confirm the password";
        } else if (data.confirmPassword !== data.password) {
            errors.confirmPassword = "password do not match";
        } else {
            delete errors.confirmPassword;
        }
    }

    return errors
}
import { containWhiteSpace, emptyField, isEmail, isPassword, isPhone } from "./baseValid";

export const RegisterValid = (customer) => {
    if (!emptyField(customer)) return false;
    
    if (!containWhiteSpace(customer)) return false;

    if (!isEmail(customer.email)) return false;

    if (!isPassword(customer.password, customer.rePassword)) return false;

    if (!isPhone(customer.phone)) return false;

    return true;
}

export const LoginValid = (customer) => {
    if (!emptyField(customer)) return false;
    
    if (!containWhiteSpace(customer)) return false;

    if (!isEmail(customer.email)) return false;

    return true;
}

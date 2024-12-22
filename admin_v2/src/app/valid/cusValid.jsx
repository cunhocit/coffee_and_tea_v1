/* eslint-disable no-unused-vars */
import { containWhiteSpace, fullField, isValidEmail, isValidPhone } from "./audthValid";

export function validUpdateCustomer(customer) {
    for (const [key, value] of Object.entries(customer)) {
        if (!value && key != 'password' && key != 'voucher_code' && key != 'image' && key != 'verify_at') {
            console.log(key);
            
            alert("Vui lòng nhập đầy đủ thông tin!");
            return false;
        }
    }

    if (!isValidEmail(customer.email)) {
        alert('Email không hợp lệ')
        return false;
    }

    if(!isValidPhone(customer.phone)) {
        alert('Số điện thoại không hợp lệ')
        return false;
    }

    return true;
}


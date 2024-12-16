import { isValidPhone } from "./audthValid";

export const OrderValid = (order) => {
    for (const [key, value] of Object.entries(order)) {
        if (!value) {
            alert(`Trường "${key}" không được để trống!`);
            return false;
        }
    }
    if (!isValidPhone(order.phone)) {
        alert('Số điện thoại không hợp lệ!');
        return false;
    }
    if (parseInt(order.quantity) <= 0) {
        alert('Số lượng không được phép < 0!');
        return false;
    }
    return true;
}
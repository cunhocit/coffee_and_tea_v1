/* eslint-disable no-unused-vars */
export function validUpdatePrd(data) {
    for (const [key, value] of Object.entries(data)) {
        if (!value && key != 'turn_order' && key != 'discount_percentage' && key != 'end_date') {
            alert("Vui lòng nhập đầy đủ thông tin!", key);
            return false;
        }
    }
    return true;
}

export const fullField = (data) => {
    if (data === null || data === undefined || data === '') {
        alert('Vui lòng nhập đầy đủ thông tin');
        return false;
    }
    return true;
};
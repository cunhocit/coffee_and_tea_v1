/* eslint-disable no-unused-vars */
export function validUpdatePrd(data) {
    for (const [key, value] of Object.entries(data)) {
        if (!value) {
            alert("Vui lòng nhập đầy đủ thông tin!");
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
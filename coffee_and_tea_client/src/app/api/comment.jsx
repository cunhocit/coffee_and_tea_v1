import axios from "axios";
import { encryptAES } from "../security/CryptAES";


export const getCommentsByProduct = async (id) => {
    try {
        const jwt_token = localStorage.getItem('jwt_token_customer')
        if (jwt_token) {
            const response = await axios.get(
                'http://127.0.0.1:8000/api/get_comments_by_product',
                {
                    headers: {
                        'Authorization': `Bearer ${jwt_token}`,
                        'Content-Type': 'application/json'
                    },
                    params: {id: id}
                }
            );
    
            if (response.status === 200) {
               return {
                    data: response.data.data
               }
            }
        }
    }catch(error) {
        console.log(error?.response?.data?.message);
        throw error;
    }
}

export const addNewComment = async (comment, id_product) => {
    try {
        const data = {
            comment: comment,
            id_product: encryptAES(id_product),
            cus_id: encryptAES(localStorage.getItem('cus_id'))
        }

        const jwt_token = localStorage.getItem('jwt_token_customer')
        if (jwt_token) {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/add_comment',
                data,
                {
                    headers: {
                        'Authorization': `Bearer ${jwt_token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
    
            if (response.status === 200) {
               return {
                    data: response.data.data
               }
            }
        }
    }catch(error) {
        console.log(error?.response?.data?.message);
        throw error;
    }
}
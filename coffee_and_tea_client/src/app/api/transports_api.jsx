import axios from "axios";

export const getTransports = async () => {
    try {
        const response = await axios.get(
            'http://127.0.0.1:8000/api/get_transports',
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        if (response.status === 200) {
           return {
                data: response.data.data || []
           }
        }
    }catch(error) {
        console.log(error?.response?.data?.message);
        throw error;
    }
}
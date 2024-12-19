import axios from "axios";

export const getAllPrdAPI = async () => {
    try {
        const response = await axios.get(
            "http://127.0.0.1:8000/api/get_all_product",
            {
                headers: {
                    "Content-Type": "application/json",
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching products: ", error);
        throw error;
    }
};

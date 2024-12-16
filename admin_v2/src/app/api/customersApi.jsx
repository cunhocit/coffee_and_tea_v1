// api cho khách hàng
import axios from "axios";

export const getAllCusAPI = async () => {
  try {
    const jwt_token = localStorage.getItem("jwt_token");
    if (jwt_token) {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/get_customers",
        {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data.data;
    }
  } catch (error) {
    console.error("Error fetching customers: ", error);
    throw error;
  }
};

export const updateCusAPI = async (customer) => {
  try {
    const jwt_token = localStorage.getItem("jwt_token");
    if (jwt_token) {
      const response = await axios.post(
          "http://127.0.0.1:8000/api/update_customer", 
          customer,
          {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status) {
        alert(response.data.message);
      };
    };
  } catch (error) {
    console.error("Error fetching customers: ", error);
    throw error;
  }
};


export const deleteCusAPI = async (id) => {
  try {
    const jwt_token = localStorage.getItem("jwt_token");
    if (jwt_token) {
      const response = await axios.post(
          "http://127.0.0.1:8000/api/delete_customer", 
          {id},
          {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status) {
        alert(response.data.message);
      };
    };
  } catch (error) {
    console.error("Error fetching customers: ", error);
    throw error;
  }
};

export const getAllHisAPI = async () => {
  try {
    const jwt_token = localStorage.getItem("jwt_token");
    if (jwt_token) {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/get_all_his",
        {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching history: ", error);
    throw error;
  }
};

export const getCustomerById = async (id) => {
  try {
    const jwt_token = localStorage.getItem("jwt_token");
    if (jwt_token) {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/get_customer_by_id",
        {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
            "Content-Type": "application/json",
          },
          params: {id},
        }
      );
      return response.data.data;
    }
  } catch (error) {
    console.error("Error fetching history: ", error);
    throw error;
  }
};

export const updateImageCustomer = async (image) => {
  try {
      const jwt_token = localStorage.getItem('jwt_token');

      if (jwt_token && image) {
          const response = await axios.post(
              'http://127.0.0.1:8000/api/update_image_customer',
              image,
              {
                  headers: {
                      'Authorization': `Bearer ${jwt_token}`,
                      'Content-Type': 'multipart/form-data'
                  },
              }
          );

          if (response.status === 200) {
              alert(response.data.message)
          }
      }
  }catch(error) {
      console.error('Lỗi: ', error);
      throw error;
  }
}

export const getOrderHistoryByEmail = async (email) => {
  try {
    const jwt_token = localStorage.getItem("jwt_token");
    if (jwt_token) {
      const response = await axios.get(
        'http://127.0.0.1:8000/api/get_order_by_email',
        {
          headers: {
            Authorization: `Bearer ${jwt_token}`,
            "Content-Type": "application/json",
          },
          params: {email}
        }
      );

      return {response: response.data.data}
    }
  } catch (error) {
    console.error("Error fetching customers: ", error.response.data.message);
    throw error;
  }
};
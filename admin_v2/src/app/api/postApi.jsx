import axios from "axios";


export const getPostAPI = async () => {
    try {
        const jwt_token = localStorage.getItem('jwt_token');

        if (jwt_token) {
            const response = await axios.get(
                'http://127.0.0.1:8000/api/get_posts',
                {
                    headers: {
                        'Authorization' : `Bearer ${jwt_token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
    
            if (response.status === 200) {
                return {
                    data: response.data.data || []
                };
            }
        }

        return {
            data: []
        };
    }catch(error) {
        console.log(error);
        throw error;
    }   
}

export const addNewPostAPI = async (post) => {
    try {
        const jwt_token = localStorage.getItem('jwt_token');

        if (jwt_token) {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/add_post',
                post,
                {
                    headers: {
                        'Authorization' : `Bearer ${jwt_token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
    
            if (response.status === 200) {
                alert(response.data.message)
            }
        }

        return {
            data: []
        };
    }catch(error) {
        alert(error.response.data.message)
        throw error;
    }   
}


export const updatePostAPI = async (post) => {
    try {
        const jwt_token = localStorage.getItem('jwt_token');

        if (jwt_token) {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/update_post',
                post,
                {
                    headers: {
                        'Authorization' : `Bearer ${jwt_token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
    
            if (response.status === 200) {
                alert(response.data.message)
            }
        }

        return {
            data: []
        };
    }catch(error) {
        alert(error.response.data.message)
        throw error;
    }   
}


export const deletePostAPI = async (post) => {
    try {
        const jwt_token = localStorage.getItem('jwt_token');

        if (jwt_token) {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/delete_post',
                post,
                {
                    headers: {
                        'Authorization' : `Bearer ${jwt_token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
    
            if (response.status === 200) {
                alert(response.data.message)
            }
        }

        return {
            data: []
        };
    }catch(error) {
        alert(error.response.data.message)
        throw error;
    }   
}
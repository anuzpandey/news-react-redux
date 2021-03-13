import axios from "axios";

const BASE_URL = "http://localhost:3004";

export const getPosts = async (prevState, page = 1, order = 'asc', limit = 10) => {
    try {
        const response = await axios.get(`${BASE_URL}/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`);

        return {
            posts: prevState.posts ? [...prevState.posts, ...response.data] : response.data,
            page: page,
            end: response.data.length === 0,
        }
    } catch (err) {
        console.log(err.message);
    }
}
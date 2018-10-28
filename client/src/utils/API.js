import axios from "axios";

export default {
    getArticles: () => {
        return axios.get("api/articles");
    },
    getArticle: (id) => {
        return axios.get(`/api/articles/${id}`);
    },
    deleteArticle: (id) => {
        return axios.delete(`/api/articles/${id}`);
    },
    saveArticle: (bookData) => {
        return axios.post("api/articles", bookData);
    }
};
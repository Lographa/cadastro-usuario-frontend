import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8000"
});

export const createSession = async (email, senha) => {
    return api.post("/login/login", {email, senha}).catch(function(error){
    window.alert(error.response.data.message);
    });
};

export const getUsers = async (token) => {
    return api.get("/usuario",  {  headers: { "x-access-token": token } }).catch(function(error){
        window.alert(error.response.data.message);
        });
}

export const createUser = async (cadastro) => {
    return api.post("/login/register", {cadastro}).catch(function(error){
        window.alert(error.response.data.message);
        });
};

export const deleteUserApi = async (id) => {
    return api.delete(`/usuario/${id}`).catch(function(error){
        window.alert(error.response.data.message);
        });
}
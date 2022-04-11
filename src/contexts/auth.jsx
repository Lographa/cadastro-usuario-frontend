import React, { createContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { api, createSession, createUser, deleteUserApi } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (recoveredUser && token) {
      setUser(JSON.parse(recoveredUser));
    }

    setLoading(false);
  }, []);

  const login = async (email, senha) => {
    const response = await createSession(email, senha);

    const loggedUser ={
      email:response.data.email ,
      senha:response.data.senha 
    };

    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem("token", JSON.stringify(response.data.token));

    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

 
      setUser(loggedUser);
      navigate("/");
  };

  const register = async (cadastro) => {
    await createUser(cadastro);
  };

  const deleteUser = async (id) => {
    await deleteUserApi(id);
    console.log("logout");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = null;
    setUser(null);
    navigate("/login");
  };

  const logout = () => {
    console.log("logout");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = null;
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout, register, deleteUser}}
    >
      {children}
    </AuthContext.Provider>
  );
};

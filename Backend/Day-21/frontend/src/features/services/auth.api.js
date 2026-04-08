            // API LAYER FOR AUTHENTICATION 




// src/services/auth.api.js

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/auth",
  withCredentials: true,
});

export async function login(username, password) {
  try {
    const response = await api.post("/login", {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.log("Login error:", error.response?.data || error.message);
    throw error;
  }
}

export async function register(username, email, password) {
  try {
    const response = await api.post("/register", {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log("Register error:", error.response?.data || error.message);
    throw error;
  }
}

export async function getMe() {
  try {
    const response = await api.get("/get-me");
    return response.data;
  } catch (error) {
    console.log("GetMe error:", error.response?.data || error.message);
    throw error;
  }
}
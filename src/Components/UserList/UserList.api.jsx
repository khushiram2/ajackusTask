import axios from "axios";
import { PageSize } from "./UserList.constants";

const BASEURL = "https://jsonplaceholder.typicode.com/users";

export const getAllUsers = async (page) => {
  try {
    return axios.get(`${BASEURL}?_start=${ PageSize*page}&_limit=${PageSize}`);
    
  } catch (error) {
    alert("Problem getting users. please try agian")
    console.log(error)
  }
};

export const addNewUser = async (payload) => {
  try {
    const response = await axios.post(BASEURL, payload);
    return response.data;
  } catch (error) {
    console.error("Error adding new user:", error);
    alert("Probelm adding user, please try again")
    throw error;
  }
};

export const updateUser = async (id, payload) => {
  try {
    const response = await axios.put(`${BASEURL}/${id}`, payload);
    return response.data;
  } catch (error) {
    console.error(`Error updating user with ID ${id}:`, error);
    alert("Probelm updating user, please try again")
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${BASEURL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting user with ID ${id}:`, error);
    alert("Probelm deleting user, please try again")
    throw error;
  }
};

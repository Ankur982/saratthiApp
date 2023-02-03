import {  CREATE_USER, GET_USER } from "./actionType";
import axios from "axios"


export const createuser = ( newUser ) => async(dispatch) => {
    let { data } = await axios.post("http://localhost:8080/user/add-user",newUser);
    
}



export const getuser = ( ) => async(dispatch) => {
    let { data } = await axios.get("http://localhost:8080/user/list-user");
    
    dispatch({
        type: GET_USER,
        payload: data,
    });
}




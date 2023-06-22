import axios from "axios";
import { CREATE_USER } from "../ActionsTypes/actions_types"

export const createUser = (userData) => {
    return async function (dispatch){
      axios.post("/api/users", userData)
        .then(()=>{
          dispatch({
            type: CREATE_USER,
            payload: userData
          })
        })
        .catch((error)=>{
          console.log(error)
        })
    }
  };
import { GET_USER } from "./actionType"


const initState = {
    users:[]
}

export const Reducer = (state = initState, { type, payload }) => {
    switch (type) {


        case GET_USER : {
            return {
                ...state,
                users: payload
            }
        }
        default: return state
    }
}
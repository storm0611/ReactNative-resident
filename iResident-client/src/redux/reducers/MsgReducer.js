import { SET_MESSAGE, CLEAR_MESSAGE } from "../types";


const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_MESSAGE:
            return {
                message: action.payload
            };
        case CLEAR_MESSAGE:
            return {
                message: undefined
            }
        default:
            return state;
    }
}
import { toast } from "react-toastify";

export const increment = (number) => {
    return {
        type: "INCREMENT",
        payload: number || 1
    }
}
export const decrement = (number) => {
    return {
        type: "DECREMENT",
        payload: number || 1
    }
}



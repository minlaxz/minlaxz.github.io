import { toast } from "react-toastify";

export const increment = (number) => {
    toast.success(`${number || 1 } incremented`);
    return {
        type: "INCREMENT",
        payload: number || 1
    }
}
export const decrement = (number) => {
    toast.warn(`${number ?? 1 } decremented`);
    return {
        type: "DECREMENT",
        payload: number || 1
    }
}



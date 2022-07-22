import {toast} from "react-toastify";

type ToastrType = "success" | "error" | "warning" | "info";

export const showNotification = (message: string, type: ToastrType) => {
    return toast[type](message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export class Toast {
    static info(message) {
        toast(message, {
            "theme": "colored",
            "type": "info",
            "position": "top-center",
            "autoClose": 3000,
            "dangerouslyHTMLString": true
        })
    }

    static success(message) {
        toast(message, {
            "theme": "colored",
            "type": "success",
            "position": "top-center",
            "autoClose": 3000,
            "dangerouslyHTMLString": true
        })
    }

    static warning(message) {
        toast(message, {
            "theme": "colored",
            "type": "warning",
            "position": "top-center",
            "autoClose": 3000,
            "dangerouslyHTMLString": true
        })
    }

    static error(message) {
        toast(message, {
            "theme": "colored",
            "type": "error",
            "position": "top-center",
            "autoClose": 3000,
            "dangerouslyHTMLString": true
        })
    }
}
import { toast } from 'react-toastify';

export function notify(message, type) {
    switch(type) {
        case 'info':
            toast.info(message);
            break;
        case 'success':
            toast.success(message);
            break;
        case 'error':
            toast.error(message);
            break;
        default:
            toast(message);
    }
}

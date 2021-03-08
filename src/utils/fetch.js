import { API_BASE_URL } from './constants';

export const httpRequest = (method, requestPath, requestData) => {
    return fetch(`${API_BASE_URL}${requestPath}`, {
        method,
        body: JSON.stringify(requestData),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(res => {
            if (res.status < 200 || res.status >= 300) {
                throw res.statusText;
            }
            return res.json();
        })
        .catch(err => alert(err));
};

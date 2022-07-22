import {HttpMethod} from "../../common/http/http-method.enum";

interface iOptions {
    method?: string;
    payload?: string;
    currentHeaders?: iHeaders;
}

interface iHeaders {
    contentType?: string;
    auth?: string;
}


export class Http {
    load(url: string, options: iOptions = {}) {
        const {method = HttpMethod.GET, payload = null, currentHeaders} = options;
        const headers = this._getHeaders(currentHeaders as iHeaders);

        return fetch(url, {
            method,
            headers,
            body: payload,
        })
            .then(this._checkStatus)
            .then(this._getJSON)
            .catch(error => Promise.reject(error));
    }


    private _getHeaders({contentType, auth}: iHeaders) {
        const headers = new Headers();

        if (contentType) {
            headers.append('content-type', contentType);
        }
        if (auth) {
            headers.append('Authorization', auth);
        }

        return headers;
    }

    private _checkStatus(response: Response) {
        const {ok, status} = response;

        if (!ok) {
            throw new Error(`${status}`);
        }

        return response;
    }

    private _getJSON(response: Response) {
        if (response.status === 204) {
            return response;
        } else {
            return response.json();
        }

    }
}
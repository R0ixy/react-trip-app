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
            .then(response => response.json())
            .catch(error => {
                return Promise.reject(error);
            });
    }


    private _getHeaders({contentType, auth}: iHeaders) {
        const headers = new Headers();

        if (contentType) {
            headers.append('content-type', contentType);
        }
        if(auth) {
            headers.append('Authorization', auth);
        }

        return headers;
    }

    private _checkStatus(response: Response) {
        const {ok, status, statusText} = response;

        if (!ok) {
            throw new Error(`${status}: ${statusText}`);
        }

        return response;
    }
}
import {Http} from "../http/http.service";

export class BaseService {
    protected _baseUrl: string;
    protected _http: Http;
    protected _basePath?: string;

    constructor(baseUrl: string, http: Http) {
        this._baseUrl = baseUrl;
        this._http = http;
    }

    protected getUrl(path = ''): string {
        return `${this._baseUrl}${this._basePath}/${path}`;
    }

    protected getToken(): string | null{
        return localStorage.getItem('token');
    }

}
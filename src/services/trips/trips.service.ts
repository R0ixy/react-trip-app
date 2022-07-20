import {HttpMethod} from "../../common/http/http-method.enum";
import {Http} from "../http/http.service";
//
// interface ITripsService {
//     baseUrl: string;
//     http: Http;
// }

export class TripsService {
    private _baseUrl: string;
    private _http: Http;
    private _basePath: string;

    constructor(baseUrl:string, http:Http) {
        this._baseUrl = baseUrl;
        this._http = http;
        this._basePath = '/trips';
    }

    getAll() {
        return this._http.load(this._getUrl(), {
            method: HttpMethod.GET,
        });
    }


    private _getUrl(path = ''): string {
        return `${this._baseUrl}${this._basePath}/${path}`;
    }
}

import {HttpMethod} from "../../common/http/http-method.enum";
import {BaseService} from "../base/base.service";
import {Http} from "../http/http.service";


export class TripsService extends BaseService {

    constructor(baseUrl: string, http: Http) {
        super(baseUrl, http);
        this._basePath = '/trips';
    }

    getAll() {
        const token = this.getToken();
        return this._http.load(this.getUrl(), {

            method: HttpMethod.GET,
            currentHeaders: {auth: `Bearer ${token}`},
        });
    }

    getById(id: string) {
        const token = this.getToken();
        return this._http.load(this.getUrl(`${id}`), {

            method: HttpMethod.GET,
            currentHeaders: {auth: `Bearer ${token}`},
        });
    }


}

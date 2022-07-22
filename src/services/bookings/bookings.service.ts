import {HttpMethod} from "../../common/http/http-method.enum";
import {Http} from "../http/http.service";
import {BaseService} from "../base/base.service";
import {iCreateBooking} from "../../interfaces/bookings/iBooking";


export class BookingsService extends BaseService {
    constructor(baseUrl: string, http: Http) {
        super(baseUrl, http);
        this._basePath = '/bookings';
    }

    getAll() {
        const token = this.getToken();
        return this._http.load(this.getUrl(), {
            method: HttpMethod.GET,
            currentHeaders: {auth: `Bearer ${token}`},
        });
    }

    create(payload: iCreateBooking) {
        const token = this.getToken();
        return this._http.load(this.getUrl(), {
            method: HttpMethod.POST,
            payload: JSON.stringify(payload),
            currentHeaders: {contentType: 'application/json', auth: `Bearer ${token}`},
        });
    }

    delete(bookingId: string) {
        const token = this.getToken();
        return this._http.load(this.getUrl(`${bookingId}`), {
            method: HttpMethod.DELETE,
            currentHeaders: {auth: `Bearer ${token}`},
        });
    }

}
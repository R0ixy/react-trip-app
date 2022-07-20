import {HttpMethod} from "../../common/http/http-method.enum";
import {Http} from "../http/http.service";
import {BaseService} from "../base/base.service";
import {iSignIn, iSignUp} from "../../interfaces/auth/iSignInUp";


export class AuthService extends BaseService {

    constructor(baseUrl: string, http: Http) {
        super(baseUrl, http);
        this._basePath = '/auth';
    }

    getAuthenticatedUser() {
        const token = this.getToken();
        if (token) {
            return this._http.load(this.getUrl('/authenticated-user '), {
                method: HttpMethod.GET,
                currentHeaders: {auth: `Bearer ${token}`},
            });
        } else {
            return Promise.reject('No token');
        }
    }

    signup(payload: iSignUp) {
        return this._http.load(this.getUrl('/sign-up'), {
            method: HttpMethod.POST,
            payload: JSON.stringify(payload),
            currentHeaders: {contentType: 'application/json'},
        });
    }

    signin(payload: iSignIn) {
        return this._http.load(this.getUrl('/sign-in'), {
            method: HttpMethod.POST,
            payload: JSON.stringify(payload),
            currentHeaders: {contentType: 'application/json'},
        });
    }


}
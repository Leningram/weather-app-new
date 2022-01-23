import axios from 'axios';

export class Api {
    constructor () {
        this._axiosInstance = axios.create({
            headers: {
                // 'Content-Type': 'application/json; charset=UTF-8',
                // 'X-Requested-With': 'XMLHttpRequest',
            }
        })
    }

    getInstance() {
        return this._axiosInstance
    }
}
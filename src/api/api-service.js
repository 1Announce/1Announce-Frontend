const axios = require('axios');
const { from } = require('rxjs');

class ApiService {
    static SERVICE_URL = 'http://localhost:8000/';

    static getAnnouncements() {
        return from( axios.get(this.SERVICE_URL + 'announcements') );
    }
}

module.exports = ApiService;
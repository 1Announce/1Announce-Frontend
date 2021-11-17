const ApiService = require('./api-service');

class ApiManager {

    static announcements = [];

    static getAnnouncements() {
        const observable = ApiService.getAnnouncements();
        observable.subscribe({
            next: ret => {
                console.log('ApiManager.getAnnouncements: Data retrieved!');
                ApiManager.announcements = ret.data.announcements;
            },
            error: err => {
                console.log('ApiManager.getAnnouncements: Failed to get announcements');
                console.log('ApiManager.getAnnouncements: err =', err);
            }
        });
        return observable;
    }
}

module.exports = ApiManager;
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

    static createAnnouncement(userId, announcement) {
        const data = {
            userId: userId,
            announcement: announcement
        }
        const observable = ApiService.createAnnouncement(data);
        observable.subscribe({
            next: ret => {
                console.log('ApiManager.createAnnouncement: Success! Returned =', ret);
            },
            error: err => {
                console.log('ApiManager.createAnnouncement: Failed to create announcement');
                console.log('ApiManager.createAnnouncement: err =', err);
            }
        })
    }
}

module.exports = ApiManager;

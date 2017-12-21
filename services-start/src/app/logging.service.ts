// Services don´t need decorators
export class LoggingService {
    logStatusChange(status: string) {
        console.log('A server status changed, new status: ' + status);
    }
}
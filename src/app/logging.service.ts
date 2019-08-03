export class LoggingService {

    logStatusChange(status: string) {
        console.log('An account status has changed to ' + status);
    }
}
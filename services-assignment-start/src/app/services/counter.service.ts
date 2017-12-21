export class CounterService {
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    incrementActiveToInactive() {
        this.activeToInactiveCounter++;
        console.log('Active -> inactive: ' + this.activeToInactiveCounter);

    }
    incrementInactiveToInactive() {
        this.inactiveToActiveCounter++;
        console.log('Inactive -> active: ' + this.inactiveToActiveCounter);
    }
}
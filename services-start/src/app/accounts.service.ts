import { Injectable, EventEmitter } from "@angular/core";
import { LoggingService } from "app/logging.service";

@Injectable() // Se agrega al servicio al que le quiero iyectar otro servicio.

export class AccountsService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    statusUpdated = new EventEmitter<string>();

    constructor(private loggingService: LoggingService) {

    }

    addAccount(name: string, status: string) {
        this.accounts.push({ name: name, status: status });
        this.loggingService.logStatusChange(status)
    }

    updateAccount(id: number, status: string) {
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status)
    }

}
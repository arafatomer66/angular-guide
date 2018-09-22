import { Component ,Output , EventEmitter } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
   providers: [LoggingService  ]
})
export class NewAccountComponent  {

  constructor(private loggingService : LoggingService , private accountsService : AccountsService ){
  }

  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  onCreateAccount(accountName: string, accountStatus: string) {
   
    this.loggingService.logStatusChange(accountStatus);
    this.accountsService.addAccount(accountName,accountStatus);
  }

}

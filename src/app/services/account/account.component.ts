import { Component, OnInit ,EventEmitter ,Output , Input  } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';
import { AppModule } from '../../app.module';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService ]
})
export class AccountComponent  {

  constructor(private loggingService : LoggingService , private accountsService : AccountsService ){

  }

  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();


  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id , status);
    // console.log('A server status changed, new status: ' + status);
    this.loggingService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }


 

}


// we should declare services in the highest hirachical place :: AppModule

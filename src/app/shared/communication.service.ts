import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../account/user';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private dataObs$=new Subject();

  getData(){
    return this.dataObs$;
  }

  updateData(user:User){
    this.dataObs$.next(user);
  }
  
  constructor() { }
}

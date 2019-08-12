import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private dataObs$=new Subject();

  getData(){
    return this.dataObs$;
  }

  updateData(data:boolean){
    this.dataObs$.next(data);
  }
  
  constructor() { }
}

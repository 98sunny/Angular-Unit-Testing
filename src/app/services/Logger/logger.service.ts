import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  messages:string[]=[];
  log(message:string){
    debugger;
    this.messages.push(message);
  }

  constructor() {
    debugger;
    // we have to check whether the constructor is being called or not.
    // Assume, some logic which is getting executing here whenever 
   }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private count=0;
  private spinners=new BehaviorSubject<string>('');
  constructor() { }

  getSpinnerObserver():Observable<string>
  {
    return this.spinners.asObservable();
  }
}

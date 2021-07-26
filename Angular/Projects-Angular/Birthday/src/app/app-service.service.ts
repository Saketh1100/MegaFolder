import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { RequiredData } from './product/product';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http:HttpClient) { }

  getData():Observable<object>
  {
      return this.http.get("https://celebrity-bucks.p.rapidapi.com/birthdays/JSON", {
	  "headers": {
		"x-rapidapi-key": "684d3be3dbmsh4aea6f4f2f7bd9fp1ed014jsned2141f6f3d3",
		"x-rapidapi-host": "celebrity-bucks.p.rapidapi.com"
	}
}
      )

  }

}

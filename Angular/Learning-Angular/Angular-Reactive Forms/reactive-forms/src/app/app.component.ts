import { Component } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-forms';
  get userName()
  {
    return this.registrationForm.get('userName');
  }
  constructor(private fb:FormBuilder){};
  
  registrationForm=this.fb.group(
    {
      userName:['',[Validators.required,Validators.minLength(3)]],
      password:[''],
      confirmPassword:[''],
      address:this.fb.group({
        city:[''],
        state:[''],
        postalcode:[''],
      })
    }
  )
  loadapiData()
  {
    this.registrationForm.patchValue({
      userName:"saketh",
      password:"api",
      confirmPassword:'api',
      
    })
  }

}

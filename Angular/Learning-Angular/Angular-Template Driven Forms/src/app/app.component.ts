import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics=['Angular','React','Vue']
  Usermodel=new User('saketh','saisaketh1@gmail.com',8985893288,'I am intrested in','morning',true)
  title = 'tdf';
  topicHasError=true;
  submitted=false;
  constructor(private enroll:EnrollmentService){}
  validateTopic(value:string)
  {
    if(value=='I am intrested in')
    {
      this.topicHasError=true;
    }
    else{
      this.topicHasError=false;
    }
  }
  onSubmit()
  {
    this.submitted=true;
    console.log(this.Usermodel);
    this.enroll.enroll(this.Usermodel).subscribe(
        data=>console.log('Success!',data),
        error=>console.error('Error',error),
        
    )
    
  }

}

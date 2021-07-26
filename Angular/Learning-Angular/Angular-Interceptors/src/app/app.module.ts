import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InterService } from './inter.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {IntercepInterceptor} from '../app/intercep.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerComponent } from './spinner/spinner.component'
import { BehaviorSubject,Observable } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BehaviorSubject,
    Observable
    
  ],
  providers: [
    InterService,
    { 
      provide:HTTP_INTERCEPTORS,
      useClass:IntercepInterceptor,
      multi:true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

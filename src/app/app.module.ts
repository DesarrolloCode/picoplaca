import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, MyDatePickerModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

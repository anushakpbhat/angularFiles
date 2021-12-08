import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewDirective } from './new.directive';
import { HighlightDirective } from './highlight.directive';
import { NeedDataService } from './need-data.service';
import { UserssModule } from './userss/userss.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavsbarComponent } from './navsbar/navsbar.component';



@NgModule({
  declarations: [
    AppComponent,
    NewDirective,
    HighlightDirective,
    NavsbarComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserssModule,
    FormsModule,
    ReactiveFormsModule
 
  ],
  providers: [NeedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

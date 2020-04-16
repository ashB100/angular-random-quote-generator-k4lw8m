import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';

import { RandomQuoteComponent } from './random-quote/random-quote.component';
import { UtilityService } from './utility.service';

@NgModule({
  imports: [ 
    BrowserModule, 
    HttpClientModule,
    FormsModule 
  ],
  declarations: [ AppComponent, HelloComponent, RandomQuoteComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }

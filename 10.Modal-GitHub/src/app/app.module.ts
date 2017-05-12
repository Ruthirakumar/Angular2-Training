import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SampleModalComponent } from './sample-modal/sample-modal.component';
import { ModalTriggerDirective } from './modal-trigger.directive';

import { JQ_TOKEN } from './jquery.service';

declare let jQuery : Object;

@NgModule({
  declarations: [
    AppComponent,
    SampleModalComponent,
    ModalTriggerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [{provide : JQ_TOKEN,useValue : jQuery}],
  bootstrap: [AppComponent]
})
export class AppModule { }

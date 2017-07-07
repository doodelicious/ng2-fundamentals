import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { EventsAppComponent } from './eventsApp.component'

@NgModule({
	imports: [BrowserModule],
	declarations: [EventsAppComponent],
	bootstrap: [EventsAppComponent]

})
export class AppModule {}
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import {
  TestAngularDashboardModule,
  TestAngularStatusBarModule,
  TestAngularDragDropModule,
  TestAngularProgressBarModule,
  TestAngularDashboardModalModule,
} from '@Test' +
  /angular'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TestAngularDashboardModule,
    TestAngularStatusBarModule,
    TestAngularDashboardModalModule,
    TestAngularDragDropModule,
    TestAngularProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

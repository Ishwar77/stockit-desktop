import { HttpClientModule } from '@angular/common/http';
import { AppstartModule } from './appstart/appstart.module';
import { FormsModule } from '@angular/forms';
import { DesktopViewModule } from './desktop/index';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DesktopViewModule,
    AppstartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

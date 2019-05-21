import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { appRouting } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, appRouting, HttpClientModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileFetchService } from './profile-fetch.service';

@NgModule({
  declarations: [AppComponent, ProfileComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [ProfileFetchService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import { ProfileFetchService } from '../profile-fetch.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profile: any;
  username: string;
  constructor(private profileFetch: ProfileFetchService) {}
  ngOnInit() {
    this.username = 'tsdharshan4';
    this.profileFetch.refreshProfile(this.username);
    this.profileFetch.getProfile().subscribe((profile) => {
      console.log(profile);
      console.log(this.username);
      this.profile = profile;
    });
  }
  fetchProfile() {
    this.profileFetch.refreshProfile(this.username);
    this.profileFetch.getProfile().subscribe((profile) => {
      console.log(profile);
      console.log(this.username);
      this.profile = profile;
    });
  }
  repo() {
    window.location.href =
      'https://github.com/' + this.username + '?tab=repositories';
  }
  followers() {
    window.location.href =
      'https://github.com/' + this.username + '?tab=followers';
  }
  following() {
    window.location.href =
      'https://github.com/' + this.username + '?tab=following';
  }
}

import { Component } from '@angular/core';
import { Angular2TokenService }    from 'angular2-token';
import { environment } from '../environments/environment';

import {ToasterModule, ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private toasterService: ToasterService;

  constructor(
    private tokenService: Angular2TokenService,
    toasterService: ToasterService
  ) {
    this.tokenService.init(environment.token_auth_config);
    this.toasterService = toasterService;
  }
    loggedIn:boolean = this.tokenService.userSignedIn();

  popToast() {
      this.toasterService.pop('success', 'Args Title', 'Args Body');
  }
}

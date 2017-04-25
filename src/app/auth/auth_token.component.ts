import { Component, OnInit } from '@angular/core';

import { Angular2TokenService } from 'angular2-token';
import { environment } from '../../environments/environment';

@Component({
    selector: 'auth-token',
    templateUrl: 'auth_token.component.html',
    styleUrls: ['auth_token.component.scss']
})
export class AuthTokenComponent {

    constructor(public tokenService: Angular2TokenService) {
        this.tokenService.init(environment.token_auth_config);
    }

}

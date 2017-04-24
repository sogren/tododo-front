import { Component, OnInit } from '@angular/core';

import { Angular2TokenService } from 'angular2-token';

@Component({
    selector: 'auth-token',
    templateUrl: 'auth_token.component.html',
    styleUrls: ['auth_token.component.scss']
})
export class AuthTokenComponent {

    constructor(public tokenService: Angular2TokenService) {
        this.tokenService.init({apiBase:'http://localhost:3000'});
    }

}

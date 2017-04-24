import { Component, OnInit } from '@angular/core';

import { Angular2TokenService } from 'angular2-token';

@Component({
    selector: 'validate-token',
    templateUrl: 'validate-token.component.html'
})
export class ValidateTokenComponent {

    output: any;

    constructor(private _tokenService: Angular2TokenService) {
      this._tokenService.init({apiBase:'http://localhost:3000'});
    }

    // Submit Data to Backend
    onSubmit() {

        this.output = null;

        this._tokenService.validateToken().subscribe(
            res => this.output     = res,
            error => this.output   = error
        );
    }
}

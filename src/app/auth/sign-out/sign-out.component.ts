import { Component, OnInit } from '@angular/core';

import { Angular2TokenService } from 'angular2-token';
import { Router } from '@angular/router';

@Component({
    selector: 'sign-out',
    templateUrl: 'sign-out.component.html'
})
export class SignOutComponent {

    output: any;

    constructor(
      private _tokenService: Angular2TokenService,
      private router: Router
    ) { }

    // Submit Data to Backend
    onSubmit() {

        this.output = null;
        this._tokenService.signOut().subscribe(
            res => {
                this.output         = res;
                this.router.navigate(['/sign-in']);
            }, error => {
                this.router.navigate(['/sign-in']);
                this.output         = error;
            }
        );
    }
}

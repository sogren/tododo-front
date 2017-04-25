import { Component, OnInit } from '@angular/core';
import { Angular2TokenService, SignInData } from 'angular2-token';
import { Router } from '@angular/router';

@Component({
    selector: 'sign-in',
    templateUrl: 'sign-in.component.html'
})
export class SignInComponent {

    signInData: SignInData = <SignInData>{};
    output: any;

    constructor(
      private _tokenService: Angular2TokenService,
      private router: Router
    ) { }

    // Submit Data to Backend
    onSubmit() {

        this.output = null;

        this._tokenService.signIn(this.signInData).subscribe(
            res => {
                this.signInData     = <SignInData>{};
                this.output         = res;
                this.router.navigate(['/dashboard']);
            }, error => {
                this.signInData     = <SignInData>{};
                this.output         = error;
            }
        );
    }
}

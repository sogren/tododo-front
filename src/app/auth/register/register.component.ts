import { Component, OnInit } from '@angular/core';
import { Angular2TokenService, RegisterData } from 'angular2-token';
import { Router } from '@angular/router';

@Component({
    selector: 'register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.scss']
})
export class RegisterComponent {

    registerData: RegisterData = <RegisterData>{};
    output: any;

    constructor(
      private _tokenService: Angular2TokenService,
      private router: Router
    ) { }

    // Submit Data to Backend
    onSubmit() {

        this.output = null;

        this._tokenService.registerAccount(this.registerData).subscribe(
            res => {
                this.registerData  = <RegisterData>{};
                this.router.navigate(['/dashboard']);
                this.output        = res;
            }, error => {
                this.registerData  = <RegisterData>{};
                this.router.navigate(['/dashboard']);
                this.output        = error;
            }
        );
    }
}

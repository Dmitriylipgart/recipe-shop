import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-reactive-sign-in',
  templateUrl: './reactive-sign-in.component.html',
  styleUrls: ['./reactive-sign-in.component.css']
})
export class ReactiveSignInComponent implements OnInit {
  signUpForm: FormGroup;
  forbiddenNames = ['chris@mail.com', 'anna@mail.com'];
  asyncForbiddenNames = ['async@mail.com'];

  constructor() {
  }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      email: new FormControl(null,
        [Validators.required, Validators.email, this.namesValidator],
        this.asyncNamesValidator.bind(this)),
      password: new FormControl(null, [Validators.required]),
      passwordRepeat: new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

  namesValidator = (formControl: FormControl): { [s: string]: boolean } => {
    let emailString: string;
    if (formControl.value) {
      emailString = (formControl.value as string).toLowerCase();
    }
    if (this.forbiddenNames.indexOf(emailString) >= 0) {
      return {nameIsForbidden: true};
    }
    return null;
  }

  asyncNamesValidator(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        let emailString: string;
        if (control.value) {
          emailString = (control.value as string).toLowerCase();
        }
        if (this.asyncForbiddenNames.indexOf(emailString) >= 0) {
          resolve({asyncForbiddenNames: true});
        }
        resolve(null);
      }, 1500);
    });
  }
}

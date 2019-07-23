import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  @ViewChild('f', {static: false}) signInForm: NgForm;

  constructor() {
  }

  ngOnInit() {
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  //   console.log('submitted');
  // }

  onSubmit() {
    console.log(this.signInForm);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild([
      {
        path: 'login',
        component: LoginComponent
      }
    ]),
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class LoginModule { 
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }
}

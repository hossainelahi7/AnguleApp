import { NgModule } from '@angular/core';
import { UserDetailComponent } from './user-detail.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    UserDetailComponent,
  ],
  imports: [
    RouterModule.forChild([
      {
        path: 'user',
        component: UserDetailComponent
      }
    ]),
    SharedModule
  ]
})
export class UserModule { }

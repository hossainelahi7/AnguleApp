import { NgModule } from '@angular/core';
import { UserDetailComponent } from './user-detail.component';
import { RouterModule } from '@angular/router';
import { UserDetailGuard } from './user-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    UserDetailComponent,
  ],
  imports: [
    RouterModule.forChild([
      {
        path: 'user/:id',
        canActivate: [UserDetailGuard],
        component: UserDetailComponent
      }
    ]),
    SharedModule
  ]
})
export class UserModule { }

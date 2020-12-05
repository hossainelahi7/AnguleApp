import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
// import { HttpHeaders } from '@angular/common/http';

@NgModule({
  declarations: [
    StarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule {

  private token: string;

  public setToken(value:string){
    this.token = value;
  }

  public getToken(){
    return this.token;
  }

}

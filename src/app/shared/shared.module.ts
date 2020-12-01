import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
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

  // constructor(private http: Http){}
  private token:string;

  public setToken(value:string){
    this.token = value;
  }

  public getToken(){
    return this.token;
  }

  // public getHeader(){
  //   let tokenStr = 'Bearer ' + this.token;
  //   // let tokenStr = this.token;
  //   // const headers = new HttpHeaders().set('Authorization', tokenStr);
  //   // return {headers, responseType: 'text' as 'json' };
  //   const headers = new HttpHeaders().append('Authorization', tokenStr);
  //   return {headers};
  // }

}

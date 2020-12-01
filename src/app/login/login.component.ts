import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';



@Component({
  // selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private userUrl = 'http://localhost:8080/api/authenticate';

  authRequest:any={
    "username":"lpaprocki@hotmail.com",
    "password":"907-385-4412"
  };

  response:any;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient,
    private shared: SharedModule
  ) { }

  ngOnInit(): void {
  }

  public getAccessToken(){
    this.generateToken(this.authRequest).subscribe(data => {
      if ( data.indexOf('Bearer ') >= 0){
        this.shared.setToken(data.split('Bearer ', 2)[1]);
        console.log("Token generated "+this.shared.getToken());
        this.router.navigate(['/products']);
      }
    });
  }

  generateToken(request) {
    return this.httpClient.post<string>(this.userUrl, request, {  responseType: 'text' as 'json' });
  }
}

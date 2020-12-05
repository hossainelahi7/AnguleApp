import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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
        this.shared.setToken(data);
        this.router.navigate(['/welcome']);
      }
    });
  }

  generateToken(request) {
    return this.httpClient.post<string>(this.userUrl, request, {  responseType: 'text' as 'json' });
  }
}

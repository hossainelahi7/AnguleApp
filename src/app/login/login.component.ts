import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { FormBuilder, FormGroup} from '@angular/forms';



@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private userUrl = 'http://localhost:8080/api/authenticate';

  form: FormGroup;

  private authRequest(username: string, password: string): string{
    return '{"username":"' + username + '","password":"' + password + '"}';
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient,
    private shared: SharedModule,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  get f() { return this.form.controls; }

  public getAccessToken(){
    this.generateToken(JSON.parse(this.authRequest(this.f.username.value, this.f.password.value))).subscribe(data => {
      if ( data.indexOf('Bearer ') >= 0){
        this.shared.setToken(data);
        this.shared.setUsername(this.f.username.value);
        this.router.navigate(['/welcome']);
      }
    });
  }

  generateToken(request) {
    return this.httpClient.post<string>(this.userUrl, request, {  responseType: 'text' as 'json' });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from './user';
import { UserService } from './user.service';

@Component({
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  pageTitle = 'User Details';
  errorMessage = '';
  user: User | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit(): void {
      this.getUser();
  }

  getUser(): void {
    this.userService.getUser().subscribe({
      next: user => this.user = user,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/user']);
  }
}

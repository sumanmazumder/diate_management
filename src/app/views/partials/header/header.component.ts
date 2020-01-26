import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterFace } from '../../auth/login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public userData : UserInterFace;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    // console.log(this.authService.user);
    this.userData = this.authService.user;
  }
  logOut(){
    this.authService.logout()
    this.router.navigate(['login'])
  }
}

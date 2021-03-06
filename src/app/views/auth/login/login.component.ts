import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from 'src/app/interfaces/UserInterface';
import { Router } from '@angular/router';

export interface UserInterFace{
  email?: string;
  password?: string;
  type?:string;
}

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  @ViewChild("loginForm", { static: true }) loginForm: ElementRef;
  public errors:any;
  public user: UserInterFace={};

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    // console.log(this.getPayload());
    // console.log(this.login());
    
  }

  login() {
    this.authService.login(this.getPayload()).subscribe(
      (user: any) => {
        console.log(user);
        
        this.authService.setUser(user.data);
        this.router.navigateByUrl('/dashboard');
      },
      (error) => {
        this.authService.setErrors(error);
        this.errors = error;
        // this.showNotification('error', 'Invalid Login Details');
      }
    );
  }

  getPayload(){
    return new FormData(this.loginForm.nativeElement);
  }
}

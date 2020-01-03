import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-error-view',
  templateUrl: './error-view.component.html',
  styleUrls: ['./error-view.component.scss']
})
export class ErrorViewComponent implements OnInit {
  @Input("errors") errors:any;
  public errorData:any;
  public errorKey : any;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    console.log(this.authService.errors);
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if(changes.errors){
      if(this.errors){
        // console.log(this.errors);
        this.errorData = this.errors.error.errors;
        console.log(this.errorData);
        this.errorKey = Object.keys(this.errorData);
        console.log(Object.keys(this.errorData));
      }
    }
  }
}

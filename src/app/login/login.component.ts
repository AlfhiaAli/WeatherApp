import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router:Router){}
  login(user,pass)
  {
   if(user==="admin")
      {
        console.log(user);
        if(pass==="admin123")
        {
          console.log(pass);
     this.router.navigate(['/dashboard']);
   }
   else{
    this.router.navigate(['/login']);
   }
   }
  } 
   ngOnInit() {
  }
}

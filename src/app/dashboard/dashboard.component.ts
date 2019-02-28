import { Component, OnInit,ViewChild, ElementRef  } from '@angular/core';
import { weathermodel } from '../../../../backend/models/weathermodel';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  s1: weathermodel;
  name:string;
  fullName: string;
  @ViewChild('lastNameInput') nameInputRef: ElementRef;

  file;

  constructor(private s:ServiceService) { }
   x:Subscription;
  ngOnInit() {
  }
  a;b;aaa;arr;s2 = [];t1;
  fileChanged(e) {
    this.file = e.target.files[0];

  let fileReader = new FileReader();
  fileReader.onload = (e) => {
    console.log(fileReader.result);
    this.aaa=fileReader.result;
    this.arr=this.aaa.split('\n');
    console.log(this.arr);
  }
  fileReader.readAsText(this.file);
  
  }
  z;
  
  submit(c,s,t,g,d)
  {
    this.z = this.s.remove();
    this.x = this.z.subscribe((d) =>{
      console.log(d);
    },
    (err) => {
      console.log(err);
     },
     () => {
      console.log("ho gaya kalyan");
    });
    for (let i = 0; i < this.arr.length; i++) 
    {
      this.t1=this.arr[i].split(",");
      this.s2.push( {"Time":this.t1[0], "Temperature":this.t1[1]} ); 
    }
    console.log(this.t1);
    this.s1= new weathermodel(c,s,t,g,d,this.s2);
    
    this.a = this.s.sign_in(this.s1);
    this.b = this.a.subscribe( (d) => {
      console.log(d);
    },
     (err) => {
      console.log(err);
     },
     () => {
      console.log("hi");
     } );
    }
}

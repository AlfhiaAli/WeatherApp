import { Injectable ,EventEmitter} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {  Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/Http';
import { weathermodel } from '../../../backend/models/weathermodel';
@Injectable({
    providedIn: 'root'
  })
  export class ServiceService {
    constructor(private http:HttpClient,private r:Router) { }
    sign_in(s1)
    {
      console.log(s1);
     return this.http.post('http://localhost:3000/dashboard',s1);
    
    }
    remove()
    {
      console.log("hel");
      return this.http.delete("http://localhost:3000/dell");
    }
   
  }
  
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Costumer } from './models/costumer';

@Injectable({
  providedIn: 'root'
})
export class CostumerService {
  jwtHelper = new JwtHelperService();

  URL = "http://localhost:4201";

  constructor(private http: HttpClient, private router:Router) { }


  newCostumer(data: Costumer){
    return this.http
      .post(`${this.URL}/costumers`, data)
  }


}

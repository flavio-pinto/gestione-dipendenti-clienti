import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Costumer } from './models/costumer';
import { AuthData, AuthService } from './auth/auth.service';
import { take } from 'rxjs';
import { NgForm } from '@angular/forms';

export interface NewUserData {
  name: string;
  surname: string;
  city: string;
  address: string;
  company: string;
  phone: number;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class CostumerService {
  URL = "http://localhost:4201";

  constructor(private http: HttpClient, private router:Router, private authSrv: AuthService) { }

  async newCostumer(data: NewUserData){
    const employe = (await this.authSrv.user$.pipe(take(1)).toPromise()) as AuthData;
    console.log(employe);

    const costumerData = {
      name: data.name,
      surname: data.surname,
      city: data.city,
      address: data.address,
      company: data.company,
      phone: data.phone,
      email: data.email,
      employeId: employe?.user.id
    }
    console.log(costumerData);
    return this.http.post<Costumer>(`${this.URL}/costumers`, costumerData);
  }
}

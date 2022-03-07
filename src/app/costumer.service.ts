import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Costumer } from './models/costumer';
import { AuthData, AuthService } from './auth/auth.service';
import { take } from 'rxjs';

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

  async fetchCostumers(): Promise<Costumer[]> {
    const employe = (await this.authSrv.user$.pipe(take(1)).toPromise()) as AuthData;
    const costumers = await this.http.get<Costumer[]>(`${this.URL}/costumers?userId=${employe.user.id}`).toPromise();
    return costumers!.filter(el => el.employeId == employe.user.id);
  }

  async removeCostumer(costumerId: number){
    return this.http.delete(`${this.URL}/costumers/${costumerId}`);
  }

  async newCostumer(data: NewUserData){
    const employe = (await this.authSrv.user$.pipe(take(1)).toPromise()) as AuthData;
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
    return this.http.post<Costumer>(`${this.URL}/costumers`, costumerData);
  }
}

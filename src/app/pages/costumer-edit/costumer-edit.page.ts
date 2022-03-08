import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Costumer } from 'src/app/models/costumer';
import {CostumerService} from 'src/app/costumer.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './costumer-edit.page.html',
  styleUrls: ['./costumer-edit.page.scss']
})
export class CostumerEditPage implements OnInit {
  costumer!: Costumer;
  employeId!: number;

  isLoading = false;
  errorMessage = undefined;
  constructor(private costSrv: CostumerService, private router: Router, private actRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.actRoute.params.subscribe(params => {
      const id = +params['id'];

      this.costSrv.getCostumer(id).subscribe(res => {
        this.costumer = res;
      });
    })

    const userJson = localStorage.getItem('user');
    if(!userJson) {
      return
    }
    const user = JSON.parse(userJson);
    this.employeId = user.user.id;
  }


  async onsubmit(form: NgForm) {
    this.isLoading = true;
    try {
      await (await this.costSrv.editCostumer(form.value, this.costumer.id)).toPromise();
      form.reset();
      this.isLoading = false;
      this.errorMessage = undefined
      this.router.navigate(['/portfolio'])
    } catch (error:any) {
      this.isLoading = false;
      this.errorMessage = error
      console.error(error);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Costumer } from 'src/app/models/costumer';
import {CostumerService} from 'src/app/costumer.service';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './costumer-new.page.html',
  styleUrls: ['./costumer-new.page.scss']
})
export class CostumerNewPage implements OnInit {
  isLoading = false;
  errorMessage = undefined
  constructor(private costSrv: CostumerService, private router:Router) {}

  ngOnInit(): void {}

  async onsubmit(form: NgForm) {
    this.isLoading = true;
    try {
      await this.costSrv.newCostumer(form.value).toPromise();
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

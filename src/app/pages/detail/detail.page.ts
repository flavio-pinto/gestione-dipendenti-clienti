import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CostumerService } from 'src/app/costumer.service';
import { Costumer } from 'src/app/models/costumer';
import { NgForm } from '@angular/forms';
import { Fattura } from 'src/app/models/fattura';

@Component({
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss']
})
export class DetailPage implements OnInit {
  costumer!: Costumer;
  isLoading = false;
  errorMessage = undefined;
  fatture!: Fattura[];

  constructor(private costSrv: CostumerService, private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      const id = +params['id'];

      this.costSrv.getCostumer(id).subscribe(res => {
        this.costumer = res;

        this.costSrv.getFatture(this.costumer.id).then((res) => {
          this.fatture = res;
        });
      });
    });
  }

  async onsubmit(form: NgForm) {
    this.isLoading = true;
    try {
      await (await this.costSrv.newFattura(form.value, this.costumer.id)).toPromise();
      form.reset();
      this.isLoading = false;
      this.errorMessage = undefined;
      alert('Fattura inserita!');
    } catch (error:any) {
      this.isLoading = false;
      this.errorMessage = error
      console.error(error);
    } finally {
      this.costSrv.getFatture(this.costumer.id).then((res) => {
        this.fatture = res;
      });
    }
  }
}

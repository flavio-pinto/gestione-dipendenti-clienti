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

  async ngOnInit() {
    this.actRoute.params.subscribe(params => {
      const id = +params['id'];

      this.costSrv.getCostumer(id).subscribe(res => {
        this.costumer = res;
        //console.log(this.costumer.id);
      });
    });
    setTimeout(() => {
      this.costSrv.getFatture(this.costumer.id).then((res) => {
        this.fatture = res;
        console.log(res);
      });
    }, 2000);


   /* this.fatture = await this.costSrv.getFatture(this.costumer.id);
   console.log(this.fatture); */

  }

  // async onsubmit(form: NgForm) {
  //   this.isLoading = true;
  //   try {
  //     await (await this.costSrv.newFattura(form.value)).toPromise();
  //     form.reset();
  //     this.isLoading = false;
  //     this.errorMessage = undefined
  //   } catch (error:any) {
  //     this.isLoading = false;
  //     this.errorMessage = error
  //     console.error(error);
  //   }
  // }
}

import { Component, OnInit } from '@angular/core';
import { CostumerService } from 'src/app/costumer.service';
import { Costumer } from 'src/app/models/costumer';

@Component({
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss']
})
export class PortfolioPage implements OnInit {
  costumers!: Costumer[];

  constructor(private costSrv: CostumerService) { }

  async ngOnInit() {
    this.costumers = await this.costSrv.fetchCostumers();
    console.log(this.costumers);
  }

  async onRemCostumer(id: number, i:number){
    try {
      await (await this.costSrv.removeCostumer(id)).toPromise();
      this.costumers.splice(i, 1)
    }
    catch(error) {
      console.log(error)
    }
  }
}

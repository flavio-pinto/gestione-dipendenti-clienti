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
}

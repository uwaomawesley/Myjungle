import { CustomerModel } from './../models/customerModel';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  customerModel : CustomerModel;
  private nombres = this.Uname;



  constructor() {
  }
  Uname(name : string) {
    this.customerModel.username = name;
  }

}

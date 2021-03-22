import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-sort-modal',
  templateUrl: './sort-modal.component.html',
  styleUrls: ['./sort-modal.component.scss'],
})
export class SortModalComponent implements OnInit {
  radioValue: string;


  constructor(private modalController: ModalController) { }

  ngOnInit():void {
    this.radioValue = localStorage.getItem('radio') || 'title-desc';
  }

    closeModal():void {
      this.modalController.dismiss(null, 'cancel').then();
    }

    radioChanged(ev:any):void {
      this.modalController.dismiss(ev.target.value, 'sort').then();
    }
}

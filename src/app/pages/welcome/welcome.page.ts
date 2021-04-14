import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  img:string;



  constructor() {

  }

  ngOnInit() {
      this.img ='https://myjungle.ec/wp-content/uploads/2020/12/IMG-20201207-WA0000.jpg';
  }
}

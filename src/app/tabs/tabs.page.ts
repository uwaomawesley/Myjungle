import { Router } from '@angular/router';
import { Component , OnInit} from '@angular/core';
import { AuthService } from "../services/auth.service";



@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{

  constructor(private authService: AuthService,
    private router: Router) {

   }

   ngOnInit() {

   }
    logout() {
       this.authService.logout();
  }
}

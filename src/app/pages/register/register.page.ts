import { TokenService } from './../../services/token.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { environment } from './../../../environments/environment.prod';
import { AuthService } from './../../services/auth.service';
import { NewUser } from './../../models/newUser';
import { Component, OnInit } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import { HttpClient } from "@angular/common/http";
import { data } from 'jquery';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  newUser: NewUser;
  username= '';
  email =  '';
  password= '';

  isLogged = false;



  constructor(
    private authService: AuthService,
    private  toastController : ToastController,
    private router: Router)
    {}

  ngOnInit() {
  }

  onRegister(){
    this.newUser = new NewUser(this.username, this.email, this.password);
    this.authService.registro(this.newUser).subscribe(
      data => {
        this.presentToast(data.message);
        this.router.navigate(['/login']);
      },
      err => {
        this.presentToast(err.error.message);
      }
    )
  }

  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }




}

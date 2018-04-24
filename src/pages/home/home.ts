import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users : any[];
  

  constructor(public navCtrl: NavController, public service : ServiceProvider, public loadingCtrl: LoadingController) {
    this.getDados();
  }

  getDados(){ 
    this.service.getData().subscribe(
      (data: any[]) => this.users = data,
      err => console.log(err)
    );
  }

  getTopics(ev: any) {
    this.getDados();
    let serVal = ev.target.value;
    if (serVal && serVal.trim() != '') {
      this.users = this.users.filter((user) => {
        return (user.titulo.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
      })
    }
  }

}

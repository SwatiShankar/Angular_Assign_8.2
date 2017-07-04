import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import { RootComponent } from './app.component';

@NgModule({
  declarations: [
    RootComponent, AppModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }

@Injectable(){
 export class Employee: IEmployees[] = [];
  get() {
    this.teamPlayers = [{
      name: "Anu",
      lastName: 'Shree'
    },
    {
      name: "Sai",
      lastName: 'Ram'
    },
    {
      name: "Sai",
      lastName: 'Eesh'
    }]
    return teamPlayers;
  }
  let x = get ();

  unShift(){

    this.arrayText = [{
  text1: 'Hello',
  text2: 'world',
}];

this.addText = function(text) {
  this.arrayText.push(text);
}
this.form = {
  text1: '',
  text2: ''
};

  }
}

interface IEmployees {
  name: string;
  lastName: string;
}
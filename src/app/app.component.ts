import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'click2edit';
  private user = {
  	username: "nadav",
  	age: 25,
  	birthday: new Date("02/06/1993"),
  	description: "bla bla bla bla bla bla",
  	bloodType: "Type A"
  };
  private permission: boolean = true;
  private today = new Date();
  private bloodTypes = ["Type A", "Type O", "Type C"];
  private permissionText: string = "Revoke editing permission";

  constructor() {}

  flipPermission() {
  	this.permission = !this.permission;
  	if(this.permission) 
  	{ this.permissionText = "Revoke permission"; }
  	else { this.permissionText = "Give permission to edit"; }
  }

  save(value) {
  	alert("parent component got: " + value);
  }
}

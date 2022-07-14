import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  // Data properties
  public title: string = "Interpolation based data binding.";
  public username: string = "Haris Siddiqui";
  public age: number;
  public email: string;
  public isMarried: boolean = false;
  public companies: string[] = ["Facebook", "Amazom", "Netflix", "Google"];

  public user = {
    id: 1001,
    name: "John Smith",
    email: "john@gmail.com",
    status: true
  }

  constructor() {
    this.age = 25;
    this.email = "haris@gmail.com";
  }

  ngOnInit(): void {
  }

}

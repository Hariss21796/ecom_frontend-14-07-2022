import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbind',
  templateUrl: './classbind.component.html',
  styleUrls: ['./classbind.component.css']
})
export class ClassbindComponent implements OnInit {

  // data properties
  public title: string = "Style binding."
  public username: string = "Will Karma";
  public age: number;
  public email: string;
  public isMarried: boolean = true;
  public companies: string[] = ["Facebook", "Amazon", "Netflix", "Google"];

  public BG = {
    ON: 'bg-one',
    TW: 'bg-two',
    TH: 'bg-three',
  }


  public user = {
    id: 1000,
    name: "john smith",
    email: "john.smith@gmail.com",
    status: true
  }

  constructor() {
    this.age = 20;
    this.email = "john@gmail.com";
  }


  ngOnInit(): void {
  }

  public onChnage() {
    this.user.status = !this.user.status;
  }

}

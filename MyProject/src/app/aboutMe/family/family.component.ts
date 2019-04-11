import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {

  familyArray: any;
  constructor() { }

  ngOnInit() {
    this.familyArray = ['mom', 'dad', 'daughter', 'son'];
  }

}

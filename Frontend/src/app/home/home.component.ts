import { Component, OnInit } from '@angular/core';
import { Train } from '../train';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  train: Train[];
  constructor() { }

  ngOnInit(): void {
  }

}

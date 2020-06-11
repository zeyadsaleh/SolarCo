import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-tutorials',
  templateUrl: './all-tutorials.component.html',
  styleUrls: ['./all-tutorials.component.css']
})
export class AllTutorialsComponent implements OnInit {

  title: string = "Tutorial";
  
  constructor() { }

  ngOnInit(): void {
  }

}

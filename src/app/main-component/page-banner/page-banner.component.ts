import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-banner',
  templateUrl: './page-banner.component.html',
  styleUrls: ['./page-banner.component.css']
})
export class PageBannerComponent implements OnInit {

  @Input() title:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

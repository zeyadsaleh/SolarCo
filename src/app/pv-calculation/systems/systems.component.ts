import { Component, OnInit, Input } from '@angular/core';
import { PvCalculationService } from 'src/app/shared/services/pv-calculation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-systems',
  templateUrl: './systems.component.html',
  styleUrls: ['./systems.component.css']
})
export class SystemsComponent implements OnInit {

  systems = new Array;
  error: string;
  success: string;
  isLoading: boolean = true;
  noResponse: boolean = false;
  p: number = 1;

  constructor(private data: PvCalculationService, private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => { this.timeOut() }, 40000);
    this.getSystems();
  }

  getSystems() {
    this.data.getSystems(
      response => {
        if (response && response['length'] > 0) {
          this.systems = response;
        }
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
      },
      error => {
        this.error = error.error.error;
      });
  }

  delete(id) {
    this.data.delCalculation(id,
      response => {
        this.success = "Deleted Successfully!";
        this.systems = this.systems.filter((value) => {
          if (value['system']['id'] != id) return value;
        });
      },
      error => {
        this.error = error.error.error;
      });
  }

  timeOut() {
    if (this.isLoading == true) {
      this.noResponse = true;
      this.isLoading = false;
    }
  }

  //scroll up whenever you change the page on pagination
  pageChanged(event) {
    this.p = event;
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 30); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 8);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { PvCalculationService } from 'src/app/shared/services/pv-calculation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-systems',
  templateUrl: './systems.component.html',
  styleUrls: ['./systems.component.css']
})
export class SystemsComponent implements OnInit {

  systems: any;
  error: string;
  success: string;
  isLoading: boolean = true;

  constructor(private data: PvCalculationService, private router: Router) { }

  ngOnInit(): void {
    this.getSystems();
  }

  getSystems() {
    this.data.getSystems(response => {
      if (response && response['length'] > 0) {
        this.systems = response;
      }
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    });
  }

  delete(id) {
    this.data.delCalculation(id, response => {
      if (response && response['error']) {
        if (response['error']) this.error = response['error'];
      } else {
        this.success = "Deleted Successfully!";
        this.systems = this.systems.filter((value) => {
          if (value['system']['id'] != id) return value;
        });
      }
    });
  }

}

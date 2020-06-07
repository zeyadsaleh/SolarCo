import { Component, OnInit } from '@angular/core';
import { PvCalculationService } from 'src/app/shared/services/pv-calculation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-systems-details',
  templateUrl: './systems-details.component.html',
  styleUrls: ['./systems-details.component.css']
})
export class SystemsDetailsComponent implements OnInit {

  systems_details: object;
  isLoading: boolean = true;
  title: string = 'Pv-Systems Details';

  constructor(private data: PvCalculationService,
    private router: Router) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails() {
    this.data.getCalculations(response => {
      if (response && response['length'] > 0) {
        this.systems_details = response;
        setTimeout(() => { 
          this.isLoading = false;
        }, 500);
        console.log(response);
      }
    });
  }
}

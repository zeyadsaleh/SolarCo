import { Component, OnInit } from '@angular/core';
import { PvCalculationService } from '../../shared/services/pv-calculation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShareService } from 'src/app/shared/services/share.service';
 
@Component({
  selector: 'app-pv-system',
  templateUrl: './pv-system.component.html',
  styleUrls: ['./pv-system.component.css']
})
export class PvSystemComponent implements OnInit {

  system_data: object;
  title: string = 'Pv-System Calculate';
  panelOpenState1: boolean = false;
  panelOpenState2: boolean = false;
  panelOpenState3: boolean = false;
  error: string;
  isLoading: boolean = true;


  constructor(private data: PvCalculationService,
    private route: ActivatedRoute,
    private router: Router,
    private __service: ShareService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getSystemDetails(+params['id']);
    });

  }

  getSystemDetails(id) {
    this.data.getCalculation(id, response => {
      if (response) {
        this.system_data = response;
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
      } else {
        this.router.navigate(['pv-system/user-info']);
      }
    });
  }

  publish() {
    if (!this.system_data['published']) {
      this.__service.setData(this.system_data);
      this.router.navigate(['create/post']);
    } else {
      console.log("this Post is published");
    }
  }

  delete() {
    this.data.delCalculation(this.system_data['system']['id'], response => {
      if (response['error']) {
        if (response['error']) this.error = response['error'];
      } else {
        this.router.navigate(['profile/systems']);
      }
    });
  }

}


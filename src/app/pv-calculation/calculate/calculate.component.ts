import { Component, OnInit } from '@angular/core';
import { PvCalculationService } from 'src/app/shared/services/pv-calculation.service';
import { ShareService } from 'src/app/shared/services/share.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})

export class CalculateComponent implements OnInit {

  api_response: object;
  title:string = 'Pv-System Calculate';

  constructor(private data: PvCalculationService,
              private router: Router,
              private __service: ShareService) { }

  ngOnInit(): void {
    this.__service.Data.subscribe((data) => {
      if(data && data['permission']){
        this.api_response = data;
      }else{
        this.router.navigate(['pv-system/user-info']);
      }
    });
  }

  calculate(){ 
      this.data.setSystem(this.api_response, response =>{
        if(response){ 
          this.__service.setData(response);
          this.router.navigate(['pv-system/', response['id']]);
        }
      });
  }
}

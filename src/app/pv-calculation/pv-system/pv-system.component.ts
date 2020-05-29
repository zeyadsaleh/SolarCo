import { Component, OnInit } from '@angular/core';
import { PvCalculationService } from '../../shared/services/pv-calculation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pv-system',
  templateUrl: './pv-system.component.html',
  styleUrls: ['./pv-system.component.css']
})
export class PvSystemComponent implements OnInit {

  system_data: object;

  constructor(private data: PvCalculationService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getInfo(+params['id']);
    });
  }

  getInfo(id){
    this.data.getSystem(id, response =>{
      if(response){
        this.system_data = response;
        console.log(response);  
      }
    });
  }

  confirm(){

  }

  cancel(){

  }

}


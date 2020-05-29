import { Component, OnInit } from '@angular/core';
import { PvCalculationService } from '../../shared/services/pv-calculation.service';

@Component({
  selector: 'app-pv-system',
  templateUrl: './pv-system.component.html',
  styleUrls: ['./pv-system.component.css']
})
export class PvSystemComponent implements OnInit {

  system_data: object;

  constructor( private data: PvCalculationService) { }

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   this.getInfo(+params['id']);
    // });
  }

  getInfo(id){
    // this.data.getUserInfo({"id": id}, response =>{
    //   if(response){
    //     this.system_data = response;
    //     console.log(response);  
    //   }
    // });
  }

  // calcSystem(id){
  //   this.data.setSystem({"id": id}, response =>{
  //     if(response){
  //       this.system_data = response;
  //       console.log(response);  
  //     }
  //   });
  // }

}


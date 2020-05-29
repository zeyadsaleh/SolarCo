import { Component, OnInit } from '@angular/core';
import { PvCalculationService } from '../../shared/services/pv-calculation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pv-system',
  templateUrl: './pv-system.component.html',
  styleUrls: ['./pv-system.component.css']
})
export class PvSystemComponent implements OnInit {

  system_data: object;

  constructor(private data: PvCalculationService, 
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getInfo(+params['id']);
    });
  }

  getInfo(id){
    this.data.getSystem(id, response =>{
      if(response){
        this.system_data = response;
      }else{
        this.router.navigate(['system-info']);
      }
    });
  }

  publish(){

  }

  save(){

  }

  cancel(){
    this.data.delSystem(this.system_data['calculation']['id']);
    this.router.navigate(['system-info']);
  }

}


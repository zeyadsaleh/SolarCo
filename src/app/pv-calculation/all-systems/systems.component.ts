import { Component, OnInit, Input } from '@angular/core';
import { PvCalculationService } from 'src/app/shared/services/pv-calculation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-systems',
  templateUrl: './systems.component.html',
  styleUrls: ['./systems.component.css']
})
export class SystemsComponent implements OnInit {

  systems:object;

  constructor(private data: PvCalculationService, private router: Router) { }

  ngOnInit(): void {
    this.getSystems();
  }

  getSystems(){
    this.data.getSystems(response =>{
        if(response){ 
          this.systems = response;
        }
    });
  }

  getCalc(id){
    console.log(id);
    this.router.navigate(['pv-system/', id]);
  }

  delete(id){
    this.data.delSystem(id);
    this.router.navigate(['profile/systems']);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { PvCalculationService } from 'src/app/shared/services/pv-calculation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-systems',
  templateUrl: './systems.component.html',
  styleUrls: ['./systems.component.css']
})
export class SystemsComponent implements OnInit {

  systems;

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

  getCalc(event){
    console.log(event.target.id);
    this.router.navigate(['pv-system/', event.target.id]);
  }

}

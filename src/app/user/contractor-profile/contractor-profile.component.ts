import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contractor-profile',
  templateUrl: './contractor-profile.component.html',
  styleUrls: ['./contractor-profile.component.css']
})
export class ContractorProfileComponent implements OnInit {

  contractor;
  isLoading: boolean = true;
  title: string = 'Contractor'

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userService.getContractor(params.get('id')).subscribe(res => {
        console.log(res);
        this.contractor = res;
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
      })
    })
  }

}

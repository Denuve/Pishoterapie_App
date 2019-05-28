import { Component, OnInit } from '@angular/core';
import { ProgramareService } from '../../User/programare/programare.service';
import { Programare } from '../../User/programare/programare';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  allAppointments;
  constructor(private programareService: ProgramareService) {

    this.programareService.listPatients().subscribe(res => {
      this.allAppointments = res;
    });
    
  }


 
  ngOnInit() {
    
  }

}

import { Component, OnInit } from '@angular/core';
import { ProgramareService } from '../../User/programare/programare.service';
import { Programare } from '../../User/programare/programare';
import { HttpRequestInterceptor } from '../../login.service';
import { Token } from '../../shared/security.models';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  allAppointments;
  token: Token;
  constructor(private programareService: ProgramareService,
    private interceptor: HttpRequestInterceptor) {

    this.programareService.listPatients().subscribe(res => {
      this.allAppointments = res;
    });

    this.token = interceptor.getToken();
  }


 
  ngOnInit() {
    
  }

}

import { Component, OnInit } from '@angular/core';
import { ProgramareService } from '../../User/programare/programare.service';
import { Programare } from '../../User/programare/programare';
import { HttpRequestInterceptor } from '../../login.service';
import { Token } from '../../shared/security.models';

@Component({
  selector: 'app-admin-archive',
  templateUrl: './admin-archive.component.html',
  styleUrls: ['./admin-archive.component.css']
})
export class AdminArchiveComponent implements OnInit {
  allPatients;
  token: Token;

  constructor(private programareService: ProgramareService,
              private interceptor: HttpRequestInterceptor) {
    this.programareService.listPatients().subscribe(res => {
      this.allPatients = res;
    });
    this.token = interceptor.getToken();
  }

  
  ngOnInit() {
  }

}

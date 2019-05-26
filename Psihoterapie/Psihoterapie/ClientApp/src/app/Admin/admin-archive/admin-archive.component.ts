import { Component, OnInit } from '@angular/core';
import { ProgramareService } from '../../User/programare/programare.service';
import { Programare } from '../../User/programare/programare';

@Component({
  selector: 'app-admin-archive',
  templateUrl: './admin-archive.component.html',
  styleUrls: ['./admin-archive.component.css']
})
export class AdminArchiveComponent implements OnInit {
  allPatients;

  constructor(private programareService: ProgramareService) {
    this.programareService.listPatients().subscribe(res => {
      this.allPatients = res;
    });

  }

  
  ngOnInit() {
  }

}

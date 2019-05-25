import { Component, OnInit } from '@angular/core';
import { ProgramareService } from './programare.service';
import { Programare } from './programare';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-programare',
  templateUrl: './programare.component.html',
  styleUrls: ['./programare.component.css']
})
export class ProgramareComponent implements OnInit {

  patient = new Programare();
  constructor(programareService: ProgramareService) {
  }

  addPatient() {
    this.patient.id = Guid.create(); 
  }

  ngOnInit() {
  }

}

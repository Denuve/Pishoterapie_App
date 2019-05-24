import { Component, OnInit } from '@angular/core';
import { ProgramareService } from './programare.service';
import { Programare } from './programare';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-programare',
  templateUrl: './programare.component.html',
  styleUrls: ['./programare.component.css']
})
export class ProgramareComponent implements OnInit {

  patient: Programare;
  constructor(programareService: ProgramareService) {
    
  }

  addPatient() {
    
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ProgramareService } from './programare.service';
import { Programare } from './programare';
import { Guid } from 'guid-typescript';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programare',
  templateUrl: './programare.component.html',
  styleUrls: ['./programare.component.css']
})
export class ProgramareComponent implements OnInit {

  patient = new Programare();
  ok: boolean = false;
  constructor(
    private router: Router,
    private programareService: ProgramareService) {
    
  }

  
  submit() {
    this.programareService.postPatient(this.patient).subscribe(res => {
      this.router.navigate(['/programare']);
    });
    this.ok = true;
  }


  

  ngOnInit() {
  }

}

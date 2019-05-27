import { Component, OnInit } from '@angular/core';
import { ProgramareService } from '../../User/programare/programare.service';
import { Programare } from '../../User/programare/programare';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.css']
})
export class PatientViewComponent implements OnInit {

  patient: Programare;
  data;
  patientId;
  
  constructor(private programareService: ProgramareService,
              private route: ActivatedRoute) {

    this.patientId = this.route.snapshot.params['id'];
    this.programareService.listPatients().subscribe(res => {
      this.patient = res.find(x => x.id == this.patientId);
    });

  }

  ngOnInit() {
  }

}

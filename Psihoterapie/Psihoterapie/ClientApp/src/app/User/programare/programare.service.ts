import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Programare } from './programare';

@Injectable({
  providedIn: 'root'
})
export class ProgramareService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }
  listPatients() {
    return this.http.get<Programare[]>(this.baseUrl + 'api/Patients/GetPatients');
  }

  loadPatient(patientID: string) {
    return this.http.get<Programare>(this.baseUrl + `api/Patients/GetPatient?patientID=${patientID}`);
  }

  putPatient(patient: Programare) {
    return this.http.post<any>(this.baseUrl + `api/Patients/PutPatient`, patient);
  }

  postPatient(patient: Programare) {
    return this.http.post<any>(this.baseUrl + `api/Articles/PostPatient`, patient);
  }

  deletePatient(patientID: string) {
    return this.http.delete<any>(this.baseUrl + `api/Articles/DeletePatient?patientID=${patientID}`);
  }
}

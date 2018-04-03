import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-notewriter',
  templateUrl: './notewriter.component.html',
  styleUrls: ['./notewriter.component.css']
})
export class NotewriterComponent implements OnInit {

  public patient: Array<Object> = [];
  public activePatientIndex: Number = 0;

  constructor(private service: PatientService) {
    this.service.get().subscribe(p => this.patient = p);
    this.service.activePatientIndex.subscribe(index => this.activePatientIndex = index);
  }

  ngOnInit() {

  }

  test() {
    this.service.add();
  }

  anotherTest() {
    this.service.changeActivePatientIndex(2);
  }

}

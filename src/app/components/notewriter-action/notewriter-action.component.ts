import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-notewriter-action',
  templateUrl: './notewriter-action.component.html',
  styleUrls: ['./notewriter-action.component.css']
})
export class NotewriterActionComponent implements OnInit {

  constructor(private service: PatientService) { }

  ngOnInit() {
  }

  newMessage() {

  }

  addPatient() {
    this.service.add();
  }

}

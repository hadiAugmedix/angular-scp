import { Component, OnInit, Input } from '@angular/core';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  @Input() patient: Array<Object>;
  @Input() activeIndex: Number;

  constructor(private service: PatientService) {

  }

  ngOnInit() {

  }

  setActiveIndex(e, i) {
    e.preventDefault();

    this.service.changeActivePatientIndex(i);
  }

}

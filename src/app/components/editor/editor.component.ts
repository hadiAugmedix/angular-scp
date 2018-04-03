import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface PatientInterface {
  name: String;
  createdAt: String;
  id: String;
  notes: String;
}

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements AfterViewInit {

  @Input() patient: PatientInterface;
  @Input() activeIndex: Number;
  @ViewChild('message') message: ElementRef;

  private editorInstance;

  constructor() { }

  ngAfterViewInit() {
    this.createEditor(this.message.nativeElement, () => {
      this.editorInstance.model.document.on('change', () => {
          this.patient.notes = this.editorInstance.getData();
      });
    });
  }

  createEditor(element, callback) {
    ClassicEditor.create(element).then(et => {
        this.editorInstance = et;

        callback();
    });
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactFormComponent implements OnInit {

  countryCodes: SelectItem[] = [
    {label: 'IL +972', value: '+972'},
    {label: 'US +1', value: '+1'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

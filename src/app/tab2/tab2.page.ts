import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  schedule = [
    {
      day: 'Senin',
      date: '29 Juli 2024',
      place: 'Kelurahan Ngasem',
      time: '09:00 - 12:00 WIB',
    },
    {
      day: 'Selasa',
      date: '30 Juli 2024',
      place: 'MPP Boyolali',
      time: '09:00 - 11:00 WIB',
    },
    {
      day: 'Selasa',
      date: '30 Juli 2024',
      place: 'Kecamatan',
      time: '13:00 - 15:00 WIB',
    },
    {
      day: 'Rabu',
      date: '31 Juli 2024',
      place: 'Kelurahan Ngasem',
      time: '09:00 - 12:00 WIB',
    },
  ];

  constructor() {}
}

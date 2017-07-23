import { Component, Input, OnInit } from '@angular/core';

const MONTH = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

@Component({
  selector: 'aw-bookmark',
  styleUrls: ['bookmark.component.scss'],
  templateUrl: './bookmark.component.html'
})
export class BookmarkComponent implements OnInit {
  @Input() set date(value: Date | string) {
    const d: Date = (value as Date).getDate ? value as Date : new Date(value as string);
    this.day = d.getDate();
    this.month = MONTH[d.getMonth()];
  };

  day: number;
  month: string;

  ngOnInit(): void {
    if (!this.day) {
      this.date = new Date();
    }
  }
}

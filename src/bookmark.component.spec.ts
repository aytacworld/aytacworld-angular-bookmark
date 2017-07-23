import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { BookmarkComponent } from './bookmark.component';

const MONTH = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

describe('BookmarkComponent', () => {
  const today = new Date();
  let fixture: ComponentFixture<BookmarkComponent>;
  let el: HTMLElement;
  let comp: BookmarkComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookmarkComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BookmarkComponent);
    el = fixture.nativeElement;
    comp = fixture.componentInstance;
  });

  it('should be defined', () => {
    expect(comp).toBeDefined();
  });

  it('should initialize today if no date is passed as Input', () => {
    fixture.detectChanges();
    expect(comp.day).toEqual(today.getDate());
    expect(comp.month).toEqual(MONTH[today.getMonth()]);
  });

  it('should initialize the date given', () => {
    const aDay = new Date(2017, 5, 25);
    comp.date = aDay;
    fixture.detectChanges();
    expect(comp.day).toEqual(aDay.getDate());
    expect(comp.month).toEqual(MONTH[aDay.getMonth()]);
  });

  it('should initialize the date given as string', () => {
    const aDay = '2017-05-25';
    comp.date = aDay;
    fixture.detectChanges();
    expect(comp.day).toEqual(25);
    expect(comp.month).toEqual(MONTH[5 - 1]);
  });

  it('should initialize today if wrong string is passed', () => {
    const aDay = 'wrong text';
    comp.date = aDay;
    fixture.detectChanges();
    expect(comp.day).toEqual(today.getDate());
    expect(comp.month).toEqual(MONTH[today.getMonth()]);
  });
});

import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { BookmarkComponent } from './bookmark.component';

describe('BookmarkComponent', () => {
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
  })

  it('should be defined', () => {
    expect(comp).toBeDefined();
  });
});

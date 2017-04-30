/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SafeNavigatingComponent } from './safe-navigating.component';

describe('SafeNavigatingComponent', () => {
  let component: SafeNavigatingComponent;
  let fixture: ComponentFixture<SafeNavigatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeNavigatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeNavigatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

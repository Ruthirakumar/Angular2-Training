/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FlightListResolverComponent } from './flight-list-resolver.component';

describe('FlightListResolverComponent', () => {
  let component: FlightListResolverComponent;
  let fixture: ComponentFixture<FlightListResolverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightListResolverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightListResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

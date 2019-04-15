import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DespremineComponent } from './despremine.component';

describe('DespremineComponent', () => {
  let component: DespremineComponent;
  let fixture: ComponentFixture<DespremineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespremineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespremineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

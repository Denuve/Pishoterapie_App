import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramareComponent } from './programare.component';

describe('ProgramareComponent', () => {
  let component: ProgramareComponent;
  let fixture: ComponentFixture<ProgramareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

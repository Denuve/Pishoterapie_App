import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticolComponent } from './articol.component';

describe('ArticolComponent', () => {
  let component: ArticolComponent;
  let fixture: ComponentFixture<ArticolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

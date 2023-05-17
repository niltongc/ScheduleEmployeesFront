import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheculeMouthComponent } from './shecule-mouth.component';

describe('SheculeMouthComponent', () => {
  let component: SheculeMouthComponent;
  let fixture: ComponentFixture<SheculeMouthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheculeMouthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SheculeMouthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

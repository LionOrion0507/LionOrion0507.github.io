import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaSoftwareComponent } from './experiencia-software.component';

describe('ExperienciaSoftwareComponent', () => {
  let component: ExperienciaSoftwareComponent;
  let fixture: ComponentFixture<ExperienciaSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaSoftwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

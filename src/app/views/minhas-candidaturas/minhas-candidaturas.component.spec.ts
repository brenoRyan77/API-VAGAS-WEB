import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasCandidaturasComponent } from './minhas-candidaturas.component';

describe('MinhasCandidaturasComponent', () => {
  let component: MinhasCandidaturasComponent;
  let fixture: ComponentFixture<MinhasCandidaturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinhasCandidaturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhasCandidaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

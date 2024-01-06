import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarVagasComponent } from './publicar-vagas.component';

describe('PublicarVagasComponent', () => {
  let component: PublicarVagasComponent;
  let fixture: ComponentFixture<PublicarVagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicarVagasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

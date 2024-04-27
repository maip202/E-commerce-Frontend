import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoCarroComponent } from './estado-carro.component';

describe('EstadoCarroComponent', () => {
  let component: EstadoCarroComponent;
  let fixture: ComponentFixture<EstadoCarroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstadoCarroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstadoCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

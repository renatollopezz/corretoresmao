import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteServicoComponent } from './cliente-servico.component';

describe('ClienteServicoComponent', () => {
  let component: ClienteServicoComponent;
  let fixture: ComponentFixture<ClienteServicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteServicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

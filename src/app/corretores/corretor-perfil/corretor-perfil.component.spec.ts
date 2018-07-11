import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorretorPerfilComponent } from './corretor-perfil.component';

describe('CorretorPerfilComponent', () => {
  let component: CorretorPerfilComponent;
  let fixture: ComponentFixture<CorretorPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorretorPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorretorPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorretorServicoComponent } from './corretor-servico.component';

describe('CorretorServicoComponent', () => {
  let component: CorretorServicoComponent;
  let fixture: ComponentFixture<CorretorServicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorretorServicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorretorServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

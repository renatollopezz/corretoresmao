import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorretorManterComponent } from './corretor-manter.component';

describe('CorretorManterComponent', () => {
  let component: CorretorManterComponent;
  let fixture: ComponentFixture<CorretorManterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorretorManterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorretorManterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

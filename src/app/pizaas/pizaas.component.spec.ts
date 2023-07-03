import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizaasComponent } from './pizaas.component';

describe('PizaasComponent', () => {
  let component: PizaasComponent;
  let fixture: ComponentFixture<PizaasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizaasComponent]
    });
    fixture = TestBed.createComponent(PizaasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

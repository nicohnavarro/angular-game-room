import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockscissorpapperComponent } from './rockscissorpapper.component';

describe('RockscissorpapperComponent', () => {
  let component: RockscissorpapperComponent;
  let fixture: ComponentFixture<RockscissorpapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RockscissorpapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RockscissorpapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

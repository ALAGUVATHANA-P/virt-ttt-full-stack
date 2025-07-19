import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Defaulter } from './defaulter';

describe('Defaulter', () => {
  let component: Defaulter;
  let fixture: ComponentFixture<Defaulter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Defaulter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Defaulter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

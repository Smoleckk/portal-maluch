import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaluchLibComponent } from './maluch-lib.component';

describe('MaluchLibComponent', () => {
  let component: MaluchLibComponent;
  let fixture: ComponentFixture<MaluchLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaluchLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaluchLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentMenuComponent } from './talent-menu.component';

describe('TalentMenuComponent', () => {
  let component: TalentMenuComponent;
  let fixture: ComponentFixture<TalentMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalentMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

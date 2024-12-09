import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexboxJustifyComponent } from './flexbox-justify.component';

describe('FlexboxJustifyComponent', () => {
  let component: FlexboxJustifyComponent;
  let fixture: ComponentFixture<FlexboxJustifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexboxJustifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexboxJustifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

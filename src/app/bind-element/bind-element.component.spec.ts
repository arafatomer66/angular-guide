import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindElementComponent } from './bind-element.component';

describe('BindElementComponent', () => {
  let component: BindElementComponent;
  let fixture: ComponentFixture<BindElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

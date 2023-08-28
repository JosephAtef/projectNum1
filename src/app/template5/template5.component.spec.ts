import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Template5Component } from './template5.component';

describe('Template5Component', () => {
  let component: Template5Component;
  let fixture: ComponentFixture<Template5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Template5Component]
    });
    fixture = TestBed.createComponent(Template5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

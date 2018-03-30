import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialToggleComponent } from './material-toggle.component';

describe('MaterialToggleComponent', () => {
  let component: MaterialToggleComponent;
  let fixture: ComponentFixture<MaterialToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTempNgContainerComponent } from './ng-temp-ng-container.component';

describe('NgTempNgContainerComponent', () => {
  let component: NgTempNgContainerComponent;
  let fixture: ComponentFixture<NgTempNgContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTempNgContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTempNgContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

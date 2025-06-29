import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooztServicesComponent } from './boozt-services.component';

describe('BooztServicesComponent', () => {
  let component: BooztServicesComponent;
  let fixture: ComponentFixture<BooztServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooztServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooztServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooztServices2Component } from './boozt-services2.component';

describe('BooztServices2Component', () => {
  let component: BooztServices2Component;
  let fixture: ComponentFixture<BooztServices2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooztServices2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooztServices2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

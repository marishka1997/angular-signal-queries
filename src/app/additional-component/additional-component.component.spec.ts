import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalComponentComponent } from './additional-component.component';

describe('AdditionalComponentComponent', () => {
  let component: AdditionalComponentComponent;
  let fixture: ComponentFixture<AdditionalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditionalComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdditionalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

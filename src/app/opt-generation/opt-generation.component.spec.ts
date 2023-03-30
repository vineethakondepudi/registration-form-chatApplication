import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptGenerationComponent } from './opt-generation.component';

describe('OptGenerationComponent', () => {
  let component: OptGenerationComponent;
  let fixture: ComponentFixture<OptGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptGenerationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

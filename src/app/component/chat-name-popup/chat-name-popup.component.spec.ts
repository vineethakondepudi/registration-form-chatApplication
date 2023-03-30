import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatNamePopupComponent } from './chat-name-popup.component';

describe('ChatNamePopupComponent', () => {
  let component: ChatNamePopupComponent;
  let fixture: ComponentFixture<ChatNamePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatNamePopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatNamePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

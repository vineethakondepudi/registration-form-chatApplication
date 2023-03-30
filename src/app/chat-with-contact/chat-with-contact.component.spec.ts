import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatWithContactComponent } from './chat-with-contact.component';

describe('ChatWithContactComponent', () => {
  let component: ChatWithContactComponent;
  let fixture: ComponentFixture<ChatWithContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatWithContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatWithContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPromiseComponent } from './my-promise.component';

describe('MyPromiseComponent', () => {
  let component: MyPromiseComponent;
  let fixture: ComponentFixture<MyPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPromiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

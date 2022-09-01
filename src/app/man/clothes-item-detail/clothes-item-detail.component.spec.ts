import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesItemDetailComponent } from './clothes-item-detail.component';

describe('ClothesItemDetailComponent', () => {
  let component: ClothesItemDetailComponent;
  let fixture: ComponentFixture<ClothesItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothesItemDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClothesItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

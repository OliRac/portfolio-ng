import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultilangComponent } from '../components/multilang/multilang.component';

describe('MultilangComponent', () => {
  let component: MultilangComponent;
  let fixture: ComponentFixture<MultilangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultilangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultilangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

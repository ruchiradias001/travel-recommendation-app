import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFavotitesComponent } from './my-favotites.component';

describe('MyFavotitesComponent', () => {
  let component: MyFavotitesComponent;
  let fixture: ComponentFixture<MyFavotitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFavotitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFavotitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

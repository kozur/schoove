import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreAltaComponent } from './padre-alta.component';

describe('PadreAltaComponent', () => {
  let component: PadreAltaComponent;
  let fixture: ComponentFixture<PadreAltaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadreAltaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

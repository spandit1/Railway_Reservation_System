import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RemovetrainComponent } from './removetrain.component';

describe('RemovetrainComponent', () => {
  let component: RemovetrainComponent;
  let fixture: ComponentFixture<RemovetrainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [RemovetrainComponent]
    });
    fixture = TestBed.createComponent(RemovetrainComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});

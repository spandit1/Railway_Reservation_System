import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminComponent } from './admin.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(() => {
    const routerStub = () => ({ navigate: array => ({}) });
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AdminComponent],
      providers: [{ provide: Router, useFactory: routerStub }]
    });
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`showDiv has default value`, () => {
    expect(component.showDiv).toEqual(false);
  });

  it(`status has default value`, () => {
    expect(component.status).toEqual(`admin`);
  });

  describe('submitLoginForm', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      const ngFormStub: NgForm = <any>{};
      spyOn(routerStub, 'navigate').and.callThrough();
      component.submitLoginForm(ngFormStub);
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });
});

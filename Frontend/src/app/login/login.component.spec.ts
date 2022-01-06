import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    const routerStub = () => ({ navigate: array => ({}) });
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [LoginComponent],
      providers: [{ provide: Router, useFactory: routerStub }]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`showDiv has default value`, () => {
    expect(component.showDiv).toEqual(false);
  });

  it(`status has default value`, () => {
    expect(component.status).toEqual(`user`);
  });

  describe('submitLoginForm', () => {
    it('makes expected calls', () => {
      const ngFormStub: NgForm = <any>{};
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(routerStub, 'navigate').and.callThrough();
      component.submitLoginForm(ngFormStub);
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });
});

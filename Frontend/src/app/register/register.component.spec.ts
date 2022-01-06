import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    const routerStub = () => ({ navigate: array => ({}) });
    const userServiceStub = () => ({
      createUser: user => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [RegisterComponent],
      providers: [
        { provide: Router, useFactory: routerStub },
        { provide: UserService, useFactory: userServiceStub }
      ]
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('saveUser', () => {
    it('makes expected calls', () => {
      const userServiceStub: UserService = fixture.debugElement.injector.get(
        UserService
      );
      spyOn(component, 'goToUserList').and.callThrough();
      spyOn(userServiceStub, 'createUser').and.callThrough();
      component.saveUser();
      expect(component.goToUserList).toHaveBeenCalled();
      expect(userServiceStub.createUser).toHaveBeenCalled();
    });
  });

  describe('goToUserList', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(routerStub, 'navigate').and.callThrough();
      component.goToUserList();
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });

  describe('onSubmit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'saveUser').and.callThrough();
      component.onSubmit();
      expect(component.saveUser).toHaveBeenCalled();
    });
  });
});

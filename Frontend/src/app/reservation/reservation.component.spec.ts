import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from '../reservation.service';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ReservationComponent } from './reservation.component';

describe('ReservationComponent', () => {
  let component: ReservationComponent;
  let fixture: ComponentFixture<ReservationComponent>;

  beforeEach(() => {
    const routerStub = () => ({ navigate: array => ({}) });
    const reservationServiceStub = () => ({
      createReservation: reservation => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ReservationComponent],
      providers: [
        { provide: Router, useFactory: routerStub },
        { provide: ReservationService, useFactory: reservationServiceStub }
      ]
    });
    fixture = TestBed.createComponent(ReservationComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('saveReservation', () => {
    it('makes expected calls', () => {
      const reservationServiceStub: ReservationService = fixture.debugElement.injector.get(
        ReservationService
      );
      spyOn(component, 'goToReservationList').and.callThrough();
      spyOn(reservationServiceStub, 'createReservation').and.callThrough();
      component.saveReservation();
      expect(component.goToReservationList).toHaveBeenCalled();
      expect(reservationServiceStub.createReservation).toHaveBeenCalled();
    });
  });

  describe('goToReservationList', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(routerStub, 'navigate').and.callThrough();
      component.goToReservationList();
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });

  describe('onSubmit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'saveReservation').and.callThrough();
      component.onSubmit();
      expect(component.saveReservation).toHaveBeenCalled();
    });
  });
});

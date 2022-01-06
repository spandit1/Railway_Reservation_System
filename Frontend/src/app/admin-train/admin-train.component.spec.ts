import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { TrainService } from '../train.service';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminTrainComponent } from './admin-train.component';

describe('AdminTrainComponent', () => {
  let component: AdminTrainComponent;
  let fixture: ComponentFixture<AdminTrainComponent>;

  beforeEach(() => {
    const routerStub = () => ({});
    const trainServiceStub = () => ({
      getAllTrains: () => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AdminTrainComponent],
      providers: [
        { provide: Router, useFactory: routerStub },
        { provide: TrainService, useFactory: trainServiceStub }
      ]
    });
    fixture = TestBed.createComponent(AdminTrainComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'getTrains').and.callThrough();
      component.ngOnInit();
      expect(component.getTrains).toHaveBeenCalled();
    });
  });

  describe('getTrains', () => {
    it('makes expected calls', () => {
      const trainServiceStub: TrainService = fixture.debugElement.injector.get(
        TrainService
      );
      spyOn(trainServiceStub, 'getAllTrains').and.callThrough();
      component.getTrains();
      expect(trainServiceStub.getAllTrains).toHaveBeenCalled();
    });
  });

  describe('Search', () => {
    it('makes expected calls', () => {
      spyOn(component, 'ngOnInit').and.callThrough();
      component.Search();
      expect(component.ngOnInit).toHaveBeenCalled();
    });
  });

  describe('SearchDestination', () => {
    it('makes expected calls', () => {
      spyOn(component, 'ngOnInit').and.callThrough();
      component.SearchDestination();
      expect(component.ngOnInit).toHaveBeenCalled();
    });
  });
});

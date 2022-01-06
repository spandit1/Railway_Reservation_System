import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { TrainService } from '../train.service';
import { FormsModule } from '@angular/forms';
import { AddTrainComponent } from './add-train.component';

describe('AddTrainComponent', () => {
  let component: AddTrainComponent;
  let fixture: ComponentFixture<AddTrainComponent>;

  beforeEach(() => {
    const routerStub = () => ({ navigate: array => ({}) });
    const trainServiceStub = () => ({
      addTrain: train => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AddTrainComponent],
      providers: [
        { provide: Router, useFactory: routerStub },
        { provide: TrainService, useFactory: trainServiceStub }
      ]
    });
    fixture = TestBed.createComponent(AddTrainComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('saveTrain', () => {
    it('makes expected calls', () => {
      const trainServiceStub: TrainService = fixture.debugElement.injector.get(
        TrainService
      );
      spyOn(component, 'goToTrainList').and.callThrough();
      spyOn(trainServiceStub, 'addTrain').and.callThrough();
      component.saveTrain();
      expect(component.goToTrainList).toHaveBeenCalled();
      expect(trainServiceStub.addTrain).toHaveBeenCalled();
    });
  });

  describe('goToTrainList', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(routerStub, 'navigate').and.callThrough();
      component.goToTrainList();
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });

  describe('onSubmit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'saveTrain').and.callThrough();
      component.onSubmit();
      expect(component.saveTrain).toHaveBeenCalled();
    });
  });
});

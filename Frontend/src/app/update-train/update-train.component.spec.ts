import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TrainService } from '../train.service';
import { FormsModule } from '@angular/forms';
import { UpdateTrainComponent } from './update-train.component';

describe('UpdateTrainComponent', () => {
  let component: UpdateTrainComponent;
  let fixture: ComponentFixture<UpdateTrainComponent>;

  beforeEach(() => {
    const activatedRouteStub = () => ({ snapshot: { params: {} } });
    const routerStub = () => ({ navigate: array => ({}) });
    const trainServiceStub = () => ({
      getTrainsById: id => ({ subscribe: f => f({}) }),
      updateTrain: (id, train) => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [UpdateTrainComponent],
      providers: [
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: Router, useFactory: routerStub },
        { provide: TrainService, useFactory: trainServiceStub }
      ]
    });
    fixture = TestBed.createComponent(UpdateTrainComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const trainServiceStub: TrainService = fixture.debugElement.injector.get(
        TrainService
      );
      spyOn(trainServiceStub, 'getTrainsById').and.callThrough();
      component.ngOnInit();
      expect(trainServiceStub.getTrainsById).toHaveBeenCalled();
    });
  });

  describe('onSubmit', () => {
    it('makes expected calls', () => {
      const trainServiceStub: TrainService = fixture.debugElement.injector.get(
        TrainService
      );
      spyOn(component, 'goToTrainList').and.callThrough();
      spyOn(trainServiceStub, 'updateTrain').and.callThrough();
      component.onSubmit();
      expect(component.goToTrainList).toHaveBeenCalled();
      expect(trainServiceStub.updateTrain).toHaveBeenCalled();
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
});

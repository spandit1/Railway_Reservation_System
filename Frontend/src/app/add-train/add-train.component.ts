import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Train } from '../train';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-add-train',
  templateUrl: './add-train.component.html',
  styleUrls: ['./add-train.component.css']
})
export class AddTrainComponent implements OnInit {

  train: Train = new Train();
  constructor(private employeeService: TrainService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveTrain(){
    this.employeeService.addTrain(this.train).subscribe( data =>{
      console.log(data);
      this.goToTrainList();
    },
    error => console.log(error));
  }

  goToTrainList(){
    this.router.navigate(['/trains']);
  }
  
  onSubmit(){
    console.log(this.train);
    this.saveTrain();
  }
}

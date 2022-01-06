import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Train } from '../train';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-update-train',
  templateUrl: './update-train.component.html',
  styleUrls: ['./update-train.component.css']
})
export class UpdateTrainComponent implements OnInit {

  id: number;
  //train: string;
  train: Train = new Train();
  constructor(private trainService: TrainService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.trainService.getTrainsById(this.id).subscribe(data => {
      //this.train = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.trainService.updateTrain(this.id, this.train).subscribe( data =>{
      this.goToTrainList();
    }
    , error => console.log(error));
  }

  goToTrainList(){
    this.router.navigate(['/train']);
  }
}
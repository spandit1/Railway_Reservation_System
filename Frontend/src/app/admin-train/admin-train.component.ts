import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Train } from '../train';
import { TrainService } from '../train.service';
@Component({
  selector: 'app-admin-train',
  templateUrl: './admin-train.component.html',
  styleUrls: ['./admin-train.component.css']
})
export class AdminTrainComponent implements OnInit {
  
  source: any;
  destination: any;
  trainId: number;
  train: Train[];
  constructor(private trainService:TrainService,private router:Router) { }

  ngOnInit(): void {
    this.getTrains();
  }
  // saveTrain(){
  //   this.trainService.createTrain(this.train).subscribe(data => console.log(data));
  //   this.goToTrainList();
  

  public getTrains(){

    this.trainService.getAllTrains().subscribe(data => {
     this.train=data;
   })
  }

  Search(){
    if(this.source==""){
      this.ngOnInit();
    }
    else{
      this.train=this.train.filter((res: { source: string; }) =>{
        return res.source.toLocaleLowerCase().match(this.source.toLocaleLowerCase());
      })
    }
  }
  SearchDestination(){
    if(this.destination==""){
      this.ngOnInit();
    }
    else{
      this.train=this.train.filter((res: { destination: string; }) =>{
        return res.destination.toLocaleLowerCase().match(this.destination.toLocaleLowerCase());
      })
    }
  }

  
  // SearchById(){
  //   if(this.trainId==""){
  //     this.ngOnInit();
  //   }
  //   else{
  //     this.train=this.train.filter((res: { trainId: number; }) =>{
  //       return res.trainId.equals(this.trainId);
  //     })
  //   }
  }
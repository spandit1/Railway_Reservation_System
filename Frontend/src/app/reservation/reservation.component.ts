import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from '../reservation';
import { ReservationService } from '../reservation.service'
import { Train } from '../train';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservation: Reservation =new Reservation();
  // reservationService: any;
  constructor(private reservationService:ReservationService,private router:Router) { }

  ngOnInit(): void {
  }
  saveReservation(){
    this.reservationService.createReservation(this.reservation).subscribe(data => console.log(data));
    this.goToReservationList();
  }
  goToReservationList(){
    this.router.navigate(['/reservation']);
  }

  onSubmit(){
    console.log(this.reservation);
    this.saveReservation();
  }
}

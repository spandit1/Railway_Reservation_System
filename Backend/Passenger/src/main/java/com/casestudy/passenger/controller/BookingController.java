package com.casestudy.passenger.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.casestudy.passenger.model.Booking;
import com.casestudy.passenger.model.TrainDetails;
import com.casestudy.passenger.service.BookingService;

@CrossOrigin
@RestController
public class BookingController {
	
	@Autowired
	private BookingService bookingService;
	
	@RequestMapping("/api/getAllTickets")
	public TrainDetails[] getAllTickets() {
		return bookingService.getAllTickets1();
	}

//	@RequestMapping(method=RequestMethod.POST, value="/reserve/{k}")
//	public String reserveTicket(@PathVariable String k, @RequestBody Booking book) {
//		bookingService.reserveTicket(book);
//		return "Ticket Reserved !";


	
//	@RequestMapping(method=RequestMethod.DELETE, value="/cancel/{pnr}")
//	public String cancelTicket(@PathVariable long pnr) {
//		bookingService.cancelTicket(pnr);
//		return "Ticket Cancelled !";
//	}
}
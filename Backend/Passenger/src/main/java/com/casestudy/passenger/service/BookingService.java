package com.casestudy.passenger.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.client.RestTemplate;

import com.casestudy.passenger.model.Booking;
import com.casestudy.passenger.model.TrainDetails;
import com.casestudy.passenger.model.Users;
import com.casestudy.passenger.repository.BookingRepository;


@Service
public class BookingService {
	
	@Autowired
	private BookingRepository bookingRepository;

	@Autowired
	SequenceGeneratorService sequenceGeneratorService;
	
	@Autowired
	private RestTemplate restTemplate;
	
//	@Autowired
//	UserRepository userRepository;
	
	public List<Booking> getAllTickets() {
		return bookingRepository.findAll();
	}
	
//	public Booking reserveTicket(Booking book) {
//		book.setPnr(sequenceGeneratorService.generateSequence(Booking.SEQUENCE_NAME));
//		bookingRepository.save(book);
//		updateSeats(book);
//		updateMyBookings(book);
//		return book;
//	}
	
//	public void cancelTicket(long pnr) {
//		cancelSeats(pnr);
//		cancelMyBookings(pnr);
//		bookingRepository.deleteById(pnr);
//	}
//
//	public void getAllTickets(Booking book) {
//		
//		TrainDetails train = restTemplate.getForObject("http://localhost:8091/traindetails/showAllTrain", TrainDetails.class);
//		train.setSeatsLeft(train.getSeatsLeft() - book.getSeats());
//		//restTemplate.put("http://localhost:8091/traindetails/putTrain/" + book.getTrainId(), train);			     
//	}
	
	
    

	public TrainDetails[] getAllTickets1(){
        ResponseEntity<TrainDetails[]> response = restTemplate.getForEntity("http://localhost:8091/traindetails/showAllTrain", TrainDetails[].class);
        TrainDetails[] trains = response.getBody();
        return trains.clone();
    }
	
	
	
//	public Users[] updateMyBookings(){
//        ResponseEntity<Users> response = restTemplate.getForEntity("http://localhost:8090/user/showuser/" + k, Users.class);
//        Users[] users = response.getBody();
//        return users.clone();
//    }
//	
//	
//	
//	public void List(Booking book) {
//			
//			TrainDetails train = restTemplate.getForObject("http://localhost:8091/traindetails/showTrain/{Id}"+ book.getTrainId(), TrainDetails.class);
//			train.setSeatsLeft(train.getSeatsLeft() - book.getSeats());
//			restTemplate.put("http://localhost:8091/traindetails/putTrain/{Id}", train);			     
//		}
	
	
//	
//	public void updateMyBookings(Booking book) {
//		Users user = restTemplate.getForObject("http://localhost:8090/user/showuser/" + book.getUsername(), Users.class);
//		List<Booking> ticket = user.getBookings();
//		ticket.add(book);
//		user.setBookings(ticket);
//		restTemplate.put("http://localhost:8090/user/updateuser", user);
//	}
//	
	
	
	/*
	public void cancelMyBookings(long pnr) {
		Booking book = bookingRepository.findByPnr(pnr);
		
		Users user = restTemplate.getForObject("http://Users/getUser/" + book.getUsername(), Users.class);
		List<Booking> ticket = new ArrayList<Booking>(user.getBookings());
		for( int count = 0; count < ticket.size(); count++) {
			if(ticket.get(count).getPnr()==book.getPnr()) {
				ticket.remove(count);
			}
		}
		user.setBookings(ticket);
		restTemplate.put("http://Users/updateUser", user);
	}
	
	public void cancelSeats(long pnr) {

		Booking book = bookingRepository.findByPnr(pnr);
		
		TrainDetails train = restTemplate.getForObject("http://TrainInformation/trainSearchById/"+ book.getTrainId(), TrainDetails.class);
		train.setSeatsLeft(train.getSeatsLeft() + book.getSeats());
		restTemplate.put("http://TrainInformation/updateTrain/", train);
    
	}
	
	*/
	
}
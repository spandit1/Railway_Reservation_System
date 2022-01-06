package com.casestudy.passenger.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.casestudy.passenger.model.Booking;

public interface BookingRepository extends MongoRepository<Booking, Long> {

	Booking findByPnr(long pnr);

}
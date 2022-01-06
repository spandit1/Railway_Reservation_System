package com.casestudy.traindetails.repo;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.casestudy.traindetails.model.TrainDetailsModel;

@Repository
public interface TrainDetailsRepo extends MongoRepository<TrainDetailsModel, Integer> {

	//Optional<TrainDetailsModel> findByName(String trainName);


	

	


}

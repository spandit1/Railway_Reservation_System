package com.casestudy.traindetails.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.casestudy.traindetails.model.TrainDetailsModel;
import com.casestudy.traindetails.repo.TrainDetailsRepo;

@Service
public class TrainDetailsServiceImpl implements TrainDetailsService {
	@Autowired
	TrainDetailsRepo trainDetailsRepo;
	
	@Override
	public TrainDetailsModel addTrain(TrainDetailsModel trainDetailsModel) {
		return trainDetailsRepo.save(trainDetailsModel);
	}
	
	@Override
	public Optional<TrainDetailsModel> gettrainById(int Id) {
		return trainDetailsRepo.findById(Id);
	}
	
//	@Override
//	public Optional<TrainDetailsModel> getTrainByName(String trainName) {
//		return trainDetailsRepo.findByName(trainName);
//		
//	}
	
	
	@Override
	public TrainDetailsModel update(TrainDetailsModel trainDetailsModel) {
		return trainDetailsRepo.save(trainDetailsModel);		
	}
	
	@Override
	public String removetrainById(int Id) {
		trainDetailsRepo.deleteById(Id);
		return ("Train deleted");
	
	}

	@Override
	public List<TrainDetailsModel> findAll() {
		// TODO Auto-generated method stub
		return trainDetailsRepo.findAll();
	}

	
	

}

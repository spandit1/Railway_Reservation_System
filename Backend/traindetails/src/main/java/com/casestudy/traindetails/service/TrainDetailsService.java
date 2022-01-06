package com.casestudy.traindetails.service;

import java.util.List;
import java.util.Optional;

import com.casestudy.traindetails.model.TrainDetailsModel;


public interface TrainDetailsService {
	
	
	public TrainDetailsModel addTrain(TrainDetailsModel trainDetailsModel);
	
	public Optional<TrainDetailsModel> gettrainById(int Id);
	
	//public Optional<TrainDetailsModel> getTrainByName(String trainName);
	
	public TrainDetailsModel update(TrainDetailsModel trainDetailsModel);
	
	public String removetrainById(int Id);

	public List<TrainDetailsModel> findAll();
	

}

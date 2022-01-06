package com.casestudy.traindetails.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.casestudy.traindetails.model.TrainDetailsModel;
import com.casestudy.traindetails.service.TrainDetailsService;


@RestController
@RequestMapping("/traindetails")
public class TrainDetailsController {

	@Autowired
	private TrainDetailsService trainDetailsService;
	
	
	//Add the train details
	@PostMapping("/addTrain")
	public TrainDetailsModel addTrain(@RequestBody TrainDetailsModel trainDetailsModel) {
		return trainDetailsService.addTrain(trainDetailsModel);
	}
	
	@GetMapping("/showAllTrain")
	public List<TrainDetailsModel> getAllTrain(){
		
		return trainDetailsService.findAll();
	}
	
	//Showing the existing train by Id
	@GetMapping("/showTrain/{Id}")
	public Optional<TrainDetailsModel> getTrainById(@PathVariable int Id) {
		return trainDetailsService.gettrainById(Id);
	}
	
//	//Showing the existing train by Name
//	@GetMapping("/showTrain/{trainName}")
//	public Optional<TrainDetailsModel> getTrainByName(@PathVariable String trainName) {
//		return trainDetailsService.getTrainByName(trainName);
//	}
	
	
	//updating existing train details
	@PutMapping("/putTrain/{Id}")
	public void updateUserDetails(@RequestBody TrainDetailsModel trainDetailsModel,@PathVariable("Id")int Id) {
		trainDetailsService.update(trainDetailsModel);
	}
		
	//Delete the train by Id
	@DeleteMapping("/removeTrain/{Id}")
	public String removeById(@PathVariable("Id")int Id) {
		return trainDetailsService.removetrainById(Id);
	}
	
	
	
	

}
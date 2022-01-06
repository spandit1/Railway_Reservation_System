package com.casestudy.traindetails.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;


@Document(collection = "TrainDB")
public class TrainDetailsModel {
	
	@Id
	private int trainId;
	private String trainName;
	private String source;
	private String destination;
	private int departureTime;
	private int arrivalTime;
	private int duration;
	private String date;
	private int seatsLeft;
	private int Fare;
	public int getTrainId() {
		return trainId;
	}
	public void setTrainId(int trainId) {
		this.trainId = trainId;
	}
	public String getTrainName() {
		return trainName;
	}
	public void setTrainName(String trainName) {
		this.trainName = trainName;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public int getDepartureTime() {
		return departureTime;
	}
	public void setDepartureTime(int departureTime) {
		this.departureTime = departureTime;
	}
	public int getArrivalTime() {
		return arrivalTime;
	}
	public void setArrivalTime(int arrivalTime) {
		this.arrivalTime = arrivalTime;
	}
	public int getDuration() {
		return duration;
	}
	public void setDuration(int duration) {
		this.duration = duration;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public int getSeatsLeft() {
		return seatsLeft;
	}
	public void setSeatsLeft(int seatsLeft) {
		this.seatsLeft = seatsLeft;
	}
	public int getFare() {
		return Fare;
	}
	public void setFare(int fare) {
		this.Fare = fare;
	}
	public TrainDetailsModel(int trainId, String trainName, String source, String destination, int departureTime,
			int arrivalTime, int duration, String date, int seatsLeft, int fare) {
		super();
		this.trainId = trainId;
		this.trainName = trainName;
		this.source = source;
		this.destination = destination;
		this.departureTime = departureTime;
		this.arrivalTime = arrivalTime;
		this.duration = duration;
		this.date = date;
		this.seatsLeft = seatsLeft;
		this.Fare = fare;
	}
	public TrainDetailsModel() {
		
	}
	@Override
	public String toString() {
		return "TrainDetailsModel [trainId=" + trainId + ", trainName=" + trainName + ", source=" + source
				+ ", destination=" + destination + ", departureTime=" + departureTime + ", arrivalTime=" + arrivalTime
				+ ", duration=" + duration + ", date=" + date + ", seatsLeft=" + seatsLeft + ", Fare=" + Fare + "]";
	}
	


}
